<template v-if="itemsByCount.length" >
    <div class="container">
        <h5>The following  items were found matching your request:</h5>
        <div>
            <v-container >
                <v-row>
                    <v-col 
                        v-for="(item, date) in paginationListItems" :key="item.date"
                    >
                        <ItemCard :item="item" />
                    </v-col>
                </v-row>

                <v-pagination
                    v-if="paramsPagination.pages > 1"
                    v-model="this.page"
                    :length="paramsPagination.pages"
                ></v-pagination>
            </v-container>
        </div>
    </div>

    
</template>

<script>
    import axiosInstance from "../../../services/axios";
    //імпортувати store який створили у PINIA
    //те необхідні функції для роботи із store
    import {useItemsByCountStore} from "../../store/ItemsByCountStore.js";
    import {useApiStore} from "../../store/ApiStore.js";
    import {mapActions, mapState} from "pinia";

    export default {
        name: 'ItemsByCount',
        props: ['userCount'],
        data() {
            return  {
                page: 1, //pagination page
            }
        },
        methods: {
           //зробити доспупними у компоненті функції(дії) із відповідного сховища 
           ...mapActions(useApiStore, ['updateCount','getUrlApiByCount']),
           ...mapActions(useItemsByCountStore, ['getItems','setParamsPagination','paginatedList']),

           //оновити стан сховища, врахувавши параметри задані користувачем
           setCount() {
            this.updateCount(this.userCount);
            this. getUrlApiByCount();
           },
        },
        computed: {
            //зробити доступними у компоненті змінні із відповідного сховища
            ...mapState(useApiStore, ['count', 'urlApiByCount']),
            ...mapState(useItemsByCountStore, ['items','paramsPagination']),
            
            //зробити пагінацію списку отриманих елементів
            paginationListItems() {
                let list = [];   
                this.setParamsPagination();
                list =  this.paginatedList(this.page);
                return list;
           }
        },
        //щоб  запит до АРІ спрацював коли компонент буде монтуватися треба звернутися до хукі життєвого циклу
        mounted() {
            this.setCount();
            this.getItems();
        }
    }
</script>