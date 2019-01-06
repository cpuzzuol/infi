<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Calendar Landing Page</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 lg3>
        <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive" @input="setTransactions"></v-date-picker>
      </v-flex>
      <v-flex xs12 sm12 md4 lg9 :class="{'mt-4': $vuetify.breakpoint.smAndDown}">
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="primary" dark class="mb-2">New Transaction</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.amount" label="Amount"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.category" label="Category"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.type" label="Type"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <template v-for="category in categories">
          <v-data-table :headers="headers" :items="filterTransactions(category)" hide-actions class="elevation-1">
            <template slot="no-data">
              <v-alert :value="true" color="info" icon="info">
                Nothing going on here today
              </v-alert>
            </template>
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{ props.item.amount }}</td>
              <td class="text-xs-left">{{ props.item.category }}</td>
              <td class="text-xs-left">{{ props.item.description }}</td>
              <td class="text-xs-left">{{ props.item.type }}</td>
              <td class="justify-center layout px-0">
                <v-btn icon class="mx-0" @click="editItem(props.item)">
                  <v-icon color="teal">edit</v-icon>
                </v-btn>
                <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                  <v-icon color="pink">delete</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </template>
        <!--<v-data-table :headers="headers" :items="categories" hide-actions class="elevation-1">-->
          <!--<template slot="no-data">-->
            <!--<v-alert :value="true" color="info" icon="info">-->
              <!--Nothing going on here today-->
            <!--</v-alert>-->
          <!--</template>-->
          <!--<template slot="items" slot-scope="props">-->
            <!--<td class="text-xs-left">{{ props.item.amount }}</td>-->
            <!--<td class="text-xs-left">{{ props.item.category }}</td>-->
            <!--<td class="text-xs-left">{{ props.item.description }}</td>-->
            <!--<td class="text-xs-left">{{ props.item.type }}</td>-->
            <!--<td class="justify-center layout px-0">-->
              <!--<v-btn icon class="mx-0" @click="editItem(props.item)">-->
                <!--<v-icon color="teal">edit</v-icon>-->
              <!--</v-btn>-->
              <!--<v-btn icon class="mx-0" @click="deleteItem(props.item)">-->
                <!--<v-icon color="pink">delete</v-icon>-->
              <!--</v-btn>-->
            <!--</td>-->
          <!--</template>-->
        <!--</v-data-table>-->
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { transactions, categories } from '@/assets/data'

  export default {
    name: "CalendarLanding",
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        landscape: false,
        reactive: false,


        dialog: false,
        headers: [
          { text: 'Amount', value: 'amount' },
          {
            text: 'Category',
            align: 'left',
            value: 'category'
          },
          { text: 'Description', value: 'description'},
          { text: 'Type', value: 'type' },
          { text: 'Actions', value: 'type', sortable: false }
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0
        },
        listPrimitive: null




      }
    },
    created(){
      this.setTransactions(this.picker)
    },
    computed: {
      ...mapState([
        'categories',
        'transactions'
      ]),
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    methods: {
      ...mapActions({
        commitTransactions: 'setTransactions'
      }),
      filterTransactions(category){
        return this.transactions.filter(t => { return t.category == category })
      },
      setTransactions(date){
        let todaysTransactions = transactions.filter(t => { return t.date == date })
        // console.log(todaysTransactions[0])
        !todaysTransactions[0] ? this.commitTransactions({transactions: [], categories: categories}) : this.commitTransactions({transactions: todaysTransactions[0].transactions, categories: categories})
      },
      subscribeToUpdate() {
        this.listPrimitive.onItemAdded(item => {
          this.desserts.push(item.value)
        })

        this.listPrimitive.onItemUpdated(item => {
          //update the item at item.index
          this.desserts.splice(item.index, 1, item.value);
        })

        this.listPrimitive.onItemDeleted(item => {
          //remove the item at item.index
          this.desserts.splice(item.index, 1);
        })
      },

      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.listPrimitive.delete(index)
      },

      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save() {
        if (this.editedIndex > -1) {
          this.listPrimitive.update(this.editedIndex, this.editedItem)
        } else {
          this.listPrimitive.push(this.editedItem)
        }

        this.close()
      }
    },
    watch: {
      dialog(val) {
        val || this.close()
      }
    },
  }
</script>

<style scoped>

</style>
