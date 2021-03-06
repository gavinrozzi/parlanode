/* globals alert */

angular.module('parlameterCardCms').factory('cardService',function($http, NET) {

	var service = {
        model:{
            list:[],
            item:null
        },
        cardTypes:[
          {
            name:'Zadnja seja',
            value:'zadnja_seja'
          },
          {
            name:'Politični kompas',
            value:'politicni_kompas'
          },
          {
            name:'Raznolikost besedišča',
            value:'raznolikost_besedisca'
          },
          {
            name:'Seznam poslancev',
            value:'seznam_poslancev'
          },
          {
            name:'Seznam poslanskih skupin',
            value:'seznam_poslanskih_skupin'
          },
          {
            name:'Seznam sej',
            value:'seznam_sej'
          },
          {
            name:'Poslanec',
            value:'poslanec'
          },
          {
            name:'Poslanska skupina',
            value:'poslanska_skupina'
          },
          {
            name:'Seje',
            value:'seje'
          },
          {
            name:'Iskanje',
            value:'iskanje'
          },
          {
            name:'Delovno telo',
            value:'delovno_telo'
          },
          {
            name:'Glasovanje',
            value:'glasovanje'
          }
        ],
        cardHeaderTypes: [
          {
            name:'Zadnja seja',
            value:'zadnja_seja'
          },
          {
            name:'Politični kompas',
            value:'politicni_kompas'
          },
          {
            name:'Raznolikost besedišča',
            value:'raznolikost_besedisca'
          },
          {
            name:'Seznam poslancev',
            value:'seznam_poslancev'
          },
          {
            name:'Seznam poslanskih skupin',
            value:'seznam_poslanskih_skupin'
          },
          {
            name:'Seznam sej',
            value:'seznam_sej'
          },
          {
            name:'Poslanec',
            value:'poslanec'
          },
          {
            name:'Poslanska skupina',
            value:'poslanska_skupina'
          },
          {
            name:'Seje',
            value:'seje'
          },
          {
            name:'Iskanje',
            value:'iskanje'
          },
          {
            name:'Delovno telo',
            value:'delovno_telo'
          },
          {
            name:'Glasovanje',
            value:'glasovanje'
          },
          {
            name:'Govor',
            value:'govor'
          }
        ],
        save : function(data){

            var promise = $http.post(NET.API_URL+'/card', data);

            promise.then(function(res){

                console.log(res);

                if(res.status === 200) {
                    service.model.list.push(res.data);
                }else{
                    alert('There was a problem');
                }

            })
                .catch(function(err){
                    console.log(err);
                    if(err.status === 409){
                        alert('A card with the same group and method was found');
                    }

                });

            return promise;

        },
        /**
         *
         * @param id
         * @param data
         * @returns {HttpPromise}
         */
        update:function(id, data){

            console.log(id);

            var promise = $http.put(NET.API_URL+'/card/'+id, data);

            promise.then(function(res){



                });

            return promise;

        },
        getList:function(){

            console.log('Get card list');

            var promise = $http.get(NET.API_URL+'/card');

            promise.then(function(res){

                service.model.list = res.data;

            });

            return promise;

        },
        remove:function(id){

            var promise = $http.delete(NET.API_URL+'/card/'+id);

            promise.then(function(res){

                angular.forEach(service.model.list, function(card, index){

                    if(card._id === res.data._id){
                        service.model.list.splice(index,1);
                    }

                });

            });

            return promise;

        }
    };

	return service;
});
