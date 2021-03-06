<template>
  <div
    :class="['search-dropdown', { small: small }]"
    v-click-outside="function() { toggleDropdown(false) }">
    <div
      v-if="selectedIds.length > 0"
      class="search-dropdown-clear"
      @click="clearSelection">×</div>
    <input
      class="search-dropdown-input"
      type="text"
      v-model="filter"
      @focus="toggleDropdown(true)"
      @keydown.enter.prevent="selectItem(filteredItems[focused].id)"
      @keydown.up.prevent="focus(focused - 1, true)"
      @keydown.down.prevent="focus(focused + 1, true)"
      :placeholder="adjustedPlaceholder">
    <ul
      :class="['search-dropdown-options', { visible: this.active, up: this.up }]"
      :style="{'margin-top': upMargin}"
      @mouseleave="focus(-1)">
      <template v-for="(item, index) in filteredItems">
        <li
          :key="`${item.id}1`"
          v-if="item.groupLabel"
          class="search-dropdown-group-label">
          {{ item.groupLabel }}
        </li>
        <!-- glasovanje-update je bilo brez :key, ki je bil v developu zgoraj je bil :key v developu, zaenkrat puščam oba-->
        <li
          :key="`${item.id}2`"
          :class="{ selected : item.selected, focused : focused === index }"
          @click="selectItem(item.id)"
          @mouseenter="focus(index)">
          <div class="search-dropdown-label">{{ item.label }}</div>
          <div v-if="item.count">{{ item.count }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
/* globals document */
const ITEM_HEIGHT = 23;
const ITEM_COUNT = 10;

export default {
  name: 'SearchDropdown',
  data: () => ({
    filter: '',
    active: false,
    focused: -1,
    upMargin: 0,
  }),
  watch: {
    filter() {
      this.focus(this.focused);
    },
    active() {
      this.$nextTick(() => {
        if (this.up) {
          this.upMargin = `-${this.$el.querySelector('.search-dropdown-options').getBoundingClientRect().height + 39}px`;
        }
      });
    },
  },
  computed: {
    filteredItems() {
      const filterAndSort = items => items
        .filter(item =>
          item.selected || item.label.toLowerCase().indexOf(this.filter.toLowerCase()) > -1,
        )
        .map((item, index) => {
          // eslint-disable-next-line no-param-reassign
          item.sortIndex = index;
          return item;
        })
        .sort((a, b) => {
          if (!this.single) {
            if (this.alphabetise && (Boolean(a.selected) === Boolean(b.selected))) {
              return a.label.localeCompare(b.label, 'sl');
            }

            if (a.selected && !b.selected) return -1;
            else if (!a.selected && b.selected) return 1;
          }

          if (a.sortIndex < b.sortIndex) return -1;
          else if (a.sortIndex > b.sortIndex) return 1;

          return 0;
        })
        .map((item) => {
          // eslint-disable-next-line no-param-reassign
          delete item.sortIndex;
          return item;
        });

      if (this.groups) {
        return this.groups
          .map((group) => {
            const itemsFromGroup = filterAndSort(this.items.filter(
              item => group.items.indexOf(item.id) > -1),
            );

            itemsFromGroup.forEach((item, index) => {
              // eslint-disable-next-line no-param-reassign
              item.groupLabel = index === 0 ? group.label : null;
            });

            return itemsFromGroup;
          })
          .reduce((a, b) => a.concat(b), []);
      }
      return filterAndSort(this.items);
    },
    selectedIds() {
      return this.filteredItems
        .filter(item => item.selected)
        .map(item => item.id);
    },
    adjustedPlaceholder() {
      if (!this.single) {
        return this.placeholder;
      }

      const selectedItem = this.filteredItems.filter(item => item.selected)[0];
      return selectedItem ? selectedItem.label : this.placeholder;
    },
  },
  directives: {
    clickOutside: {
      bind(el, binding) {
        const handler = (e) => {
          if (!el.contains(e.target) && el !== e.target) {
            binding.value(e);
          }
        };
        // eslint-disable-next-line no-param-reassign
        el.vueClickOutside = handler;
        document.addEventListener('click', handler);
      },
      unbind(el) {
        document.removeEventListener('click', el.vueClickOutside);
        // eslint-disable-next-line no-param-reassign
        el.vueClickOutside = null;
      },
    },
  },
  props: {
    alphabetise: {
      type: Boolean,
      default: true,
    },
    groups: Array,
    items: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    selectCallback: Function,
    clearCallback: Function,
    single: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    up: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    selectItem(selectedItemId) {
      if (this.single) {
        this.clearSelection();
        this.toggleItem(selectedItemId);
        this.toggleDropdown(false);
      } else {
        this.toggleItem(selectedItemId);
      }

      if (this.selectCallback) {
        this.selectCallback(selectedItemId);
      }
    },
    toggleItem(itemId) {
      const clickedItem = this.items.filter(item => item.id === itemId)[0];
      this.$set(clickedItem, 'selected', !clickedItem.selected);
    },
    toggleDropdown(state) {
      if (state === false) {
        this.filter = '';
      }
      this.active = state;
    },
    clearSelection() {
      this.selectedIds.forEach(this.toggleItem);

      if (this.clearCallback) {
        this.clearCallback();
      }
    },
    focus(index, withKeyboard) {
      this.focused = Math.max(Math.min(this.filteredItems.length - 1, index), -1);

      if (!withKeyboard) return;

      const additionalOffset = this.filteredItems.slice(0, this.focused + 1)
        .map(item => (item.groupLabel ? 1 : 0))
        .reduce((a, b) => a + b, 0);
      const optionListEl = this.$el.lastChild;
      const focusedPosition = (this.focused + additionalOffset) * ITEM_HEIGHT;

      if (focusedPosition < optionListEl.scrollTop) {
        optionListEl.scrollTop = focusedPosition;
      } else if (focusedPosition > optionListEl.scrollTop + ((ITEM_COUNT - 1) * ITEM_HEIGHT)) {
        optionListEl.scrollTop = focusedPosition - ((ITEM_COUNT - 1) * ITEM_HEIGHT);
      }
    },
  },
};
</script>

<style lang="scss">
@import '~parlassets/scss/colors';

.up {
  border-bottom: none;
  border-top: 1px solid $grey-medium;
}
</style>