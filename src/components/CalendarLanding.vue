<template>
  <div>
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <h1>Calendar Landing Page</h1>
        </v-flex>
        <v-flex d-flex lg3>
          <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive" full-width @input="setTransactions"></v-date-picker>
        </v-flex>
        <v-flex d-flex lg9>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm12 md4 v-for="type in types" :key="type">
              <v-card max-width="100%">
                <v-toolbar :color="typeColor(type)" dark>
                  <v-toolbar-side-icon></v-toolbar-side-icon>
                  <v-toolbar-title>{{ type }}</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-list two-line>
                  <template v-for="(item, index) in getTransactionsByType(type)">
                    <!--<v-subheader-->
                        <!--v-if="item.header"-->
                        <!--:key="item.header"-->
                    <!--&gt;-->
                      <!--${{ item.amount }}-->
                    <!--</v-subheader>-->

                    <!--<v-divider-->
                        <!--v-else-if="item.divider"-->
                        <!--:inset="item.inset"-->
                        <!--:key="index"-->
                    <!--&gt;</v-divider>-->

                    <!--<v-list-tile-->
                        <!--v-else-->
                        <!--:key="item.title"-->
                        <!--avatar-->
                        <!--@click=""-->
                    <!--&gt;-->
                      <!--<v-list-tile-avatar>-->
                        <!--<img :src="item.avatar">-->
                      <!--</v-list-tile-avatar>-->

                      <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title v-html="item.title"></v-list-tile-title>-->
                        <!--<v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>-->
                      <!--</v-list-tile-content>-->
                    <!--</v-list-tile>-->
                    <v-list-tile
                        :key="item.id"
                        avatar
                        @click=""
                    >
                      <v-list-tile-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-html="item.description"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="'$ ' + item.amount"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
                <v-card-actions>
                  <v-layout row wrap>
                    <v-flex xs6>
                      <v-card flat>
                        <v-card-text>Today's {{ type }}</v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs6>
                      <v-card :color="typeColor(type)" dark tile flat>
                        <v-card-text>$ <span v-html="totalsByType(type)"></span> </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--<v-flex d-flex xs12 sm12 md4>-->
              <!--<v-card max-width="100%">-->
                <!--<v-toolbar color="green" dark>-->
                  <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
                  <!--<v-toolbar-title>Inflows</v-toolbar-title>-->
                  <!--<v-spacer></v-spacer>-->
                  <!--<v-btn icon>-->
                    <!--<v-icon>search</v-icon>-->
                  <!--</v-btn>-->
                <!--</v-toolbar>-->
                <!--<v-list two-line>-->
                  <!--<template v-for="(item, index) in items">-->
                    <!--<v-subheader-->
                        <!--v-if="item.header"-->
                        <!--:key="item.header"-->
                    <!--&gt;-->
                      <!--{{ item.header }}-->
                    <!--</v-subheader>-->

                    <!--<v-divider-->
                        <!--v-else-if="item.divider"-->
                        <!--:inset="item.inset"-->
                        <!--:key="index"-->
                    <!--&gt;</v-divider>-->

                    <!--<v-list-tile-->
                        <!--v-else-->
                        <!--:key="item.title"-->
                        <!--avatar-->
                        <!--@click=""-->
                    <!--&gt;-->
                      <!--<v-list-tile-avatar>-->
                        <!--<img :src="item.avatar">-->
                      <!--</v-list-tile-avatar>-->

                      <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title v-html="item.title"></v-list-tile-title>-->
                        <!--<v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>-->
                      <!--</v-list-tile-content>-->
                    <!--</v-list-tile>-->
                  <!--</template>-->
                <!--</v-list>-->
                <!--<v-card-actions>-->
                  <!--<v-layout row wrap>-->
                    <!--<v-flex xs6>-->
                      <!--<v-card flat>-->
                        <!--<v-card-text>Today's Inflows</v-card-text>-->
                      <!--</v-card>-->
                    <!--</v-flex>-->
                    <!--<v-flex xs6>-->
                      <!--<v-card color="green" dark tile flat>-->
                        <!--<v-card-text>$900.00</v-card-text>-->
                      <!--</v-card>-->
                    <!--</v-flex>-->
                  <!--</v-layout>-->
                <!--</v-card-actions>-->
              <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex d-flex xs12 sm12 md4>-->
              <!--<v-card max-width="100%">-->
                <!--<v-toolbar color="red" dark>-->
                  <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
                  <!--<v-toolbar-title>Outflows</v-toolbar-title>-->
                  <!--<v-spacer></v-spacer>-->
                  <!--<v-btn icon>-->
                    <!--<v-icon>search</v-icon>-->
                  <!--</v-btn>-->
                <!--</v-toolbar>-->
                <!--<v-list two-line>-->
                  <!--<template v-for="(item, index) in items">-->
                    <!--<v-subheader-->
                        <!--v-if="item.header"-->
                        <!--:key="item.header"-->
                    <!--&gt;-->
                      <!--{{ item.header }}-->
                    <!--</v-subheader>-->

                    <!--<v-divider-->
                        <!--v-else-if="item.divider"-->
                        <!--:inset="item.inset"-->
                        <!--:key="index"-->
                    <!--&gt;</v-divider>-->

                    <!--<v-list-tile-->
                        <!--v-else-->
                        <!--:key="item.title"-->
                        <!--avatar-->
                        <!--@click=""-->
                    <!--&gt;-->
                      <!--<v-list-tile-avatar>-->
                        <!--<img :src="item.avatar">-->
                      <!--</v-list-tile-avatar>-->

                      <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title v-html="item.title"></v-list-tile-title>-->
                        <!--<v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>-->
                      <!--</v-list-tile-content>-->
                    <!--</v-list-tile>-->
                  <!--</template>-->
                <!--</v-list>-->
                <!--<v-card-actions>-->
                  <!--<v-layout row wrap>-->
                    <!--<v-flex xs6>-->
                      <!--<v-card flat>-->
                        <!--<v-card-text>Today's Outflows</v-card-text>-->
                      <!--</v-card>-->
                    <!--</v-flex>-->
                    <!--<v-flex xs6>-->
                      <!--<v-card color="red" dark tile flat>-->
                        <!--<v-card-text>$900.00</v-card-text>-->
                      <!--</v-card>-->
                    <!--</v-flex>-->
                  <!--</v-layout>-->
                <!--</v-card-actions>-->
              <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex d-flex xs12 sm12 md4>-->
              <!--<v-card max-width="100%">-->
                <!--<v-toolbar color="yellow darken-2" dark>-->
                  <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
                  <!--<v-toolbar-title>Allocations</v-toolbar-title>-->
                  <!--<v-spacer></v-spacer>-->
                  <!--<v-btn icon>-->
                    <!--<v-icon>search</v-icon>-->
                  <!--</v-btn>-->
                <!--</v-toolbar>-->
                <!--<v-list two-line>-->
                  <!--<template v-for="(item, index) in items">-->
                    <!--<v-subheader-->
                        <!--v-if="item.header"-->
                        <!--:key="item.header"-->
                    <!--&gt;-->
                      <!--{{ item.header }}-->
                    <!--</v-subheader>-->

                    <!--<v-divider-->
                        <!--v-else-if="item.divider"-->
                        <!--:inset="item.inset"-->
                        <!--:key="index"-->
                    <!--&gt;</v-divider>-->

                    <!--<v-list-tile-->
                        <!--v-else-->
                        <!--:key="item.title"-->
                        <!--avatar-->
                        <!--@click=""-->
                    <!--&gt;-->
                      <!--<v-list-tile-avatar>-->
                        <!--<img :src="item.avatar">-->
                      <!--</v-list-tile-avatar>-->

                      <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title v-html="item.title"></v-list-tile-title>-->
                        <!--<v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>-->
                      <!--</v-list-tile-content>-->
                    <!--</v-list-tile>-->
                  <!--</template>-->
                <!--</v-list>-->
                <!--<v-card-actions>-->
                  <!--<v-layout row wrap>-->
                    <!--<v-flex xs6>-->
                      <!--<v-card flat>-->
                        <!--<v-card-text>Today's Allocations</v-card-text>-->
                      <!--</v-card>-->
                    <!--</v-flex>-->
                    <!--<v-flex xs6>-->
                      <!--<v-card color="yellow darken-2" dark tile flat>-->
                        <!--<v-card-text>$900.00</v-card-text>-->
                      <!--</v-card>-->
                    <!--</v-flex>-->
                  <!--</v-layout>-->
                <!--</v-card-actions>-->
              <!--</v-card>-->
            <!--</v-flex>-->
            <v-flex d-flex xs12>
              <v-card height="200px" flat>
                <div class="headline text-xs-center pa-5">
                  Active: {{ bottomNav }}
                </div>
                <v-bottom-nav
                    :active.sync="bottomNav"
                    :value="true"
                    absolute
                    color="transparent"
                >
                  <v-btn
                      color="teal"
                      flat
                      value="recent"
                  >
                    <span>Today</span>
                    <v-icon>calendar_view_day</v-icon>
                  </v-btn>

                  <v-btn
                      color="teal"
                      flat
                      value="favorites"
                  >
                    <span>Month</span>
                    <v-icon>date_range</v-icon>
                  </v-btn>

                  <v-btn
                      color="teal"
                      flat
                      value="nearby"
                  >
                    <span>Year</span>
                    <v-icon>calendar_today</v-icon>
                  </v-btn>
                </v-bottom-nav>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

      <!--<v-flex xs12 sm12 md4 lg9 :class="{'mt-4': $vuetify.breakpoint.smAndDown}">-->
        <!--<v-dialog v-model="dialog" max-width="500px">-->
          <!--<v-btn slot="activator" color="primary" dark class="mb-2">New Transaction</v-btn>-->
          <!--<v-card>-->
            <!--<v-card-title>-->
              <!--<span class="headline">{{ formTitle }}</span>-->
            <!--</v-card-title>-->
            <!--<v-card-text>-->
              <!--<v-container grid-list-md>-->
                <!--<v-layout wrap>-->
                  <!--<v-flex xs12 sm6 md4>-->
                    <!--<v-text-field v-model="editedItem.amount" label="Amount"></v-text-field>-->
                  <!--</v-flex>-->
                  <!--<v-flex xs12 sm6 md4>-->
                    <!--<v-text-field v-model="editedItem.category" label="Category"></v-text-field>-->
                  <!--</v-flex>-->
                  <!--<v-flex xs12 sm6 md4>-->
                    <!--<v-text-field v-model="editedItem.description" label="Description"></v-text-field>-->
                  <!--</v-flex>-->
                  <!--<v-flex xs12 sm6 md4>-->
                    <!--<v-text-field v-model="editedItem.type" label="Type"></v-text-field>-->
                  <!--</v-flex>-->
                <!--</v-layout>-->
              <!--</v-container>-->
            <!--</v-card-text>-->
            <!--<v-card-actions>-->
              <!--<v-spacer></v-spacer>-->
              <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
              <!--<v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>-->
            <!--</v-card-actions>-->
          <!--</v-card>-->
        <!--</v-dialog>-->

        <!--<template v-for="(category, index) in categories">-->
          <!--<v-data-table :headers="headers" :items="filterTransactions(category)" :key="index" hide-actions class="elevation-1">-->
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
        <!--</template>-->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { transactions, categories } from '@/assets/data'

  export default {
    name: "CalendarLanding",
    data () {
      return {
        bottomNav: 'recent',
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
        listPrimitive: null,
        items: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          }
        ]




      }
    },
    created(){
      this.setTransactions(this.picker)
    },
    computed: {
      ...mapState([
        'categories',
        'transactions',
        'types'
      ]),
      allocations() {
        let items = []
        this.transactions.filter(t => { t.type == 'allocation' ? items.push(t) : '' })
        return items
      },
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      inflows() {
        let items = []
        this.transactions.filter(t => { t.type == 'inflow' ? items.push(t) : '' })
        return items
      },
      outflows() {
        let items = []
        this.transactions.filter(t => { t.type == 'outflow' ? items.push(t) : '' })
        return items
      }
    },
    methods: {
      ...mapActions({
        commitTransactions: 'setTransactions'
      }),
      getTransactionsByType(type){
        switch (type) {
          case 'Inflows':
            return this.inflows
          case 'Outflows':
            return this.outflows
          case 'Allocations':
            return this.allocations
          default:
            return []
        }
      },
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
      },
      totalsByType(type){
        let amount = 0.0
        let transactions = []
        switch (type) {
          case 'Inflows':
            transactions = this.inflows
            break
          case 'Outflows':
            transactions = this.outflows
            break
          case 'Allocations':
            transactions = this.allocations
            break
          default:
            break
        }
        transactions.forEach((t) => { amount += parseFloat(t.amount)})
        return amount.toFixed(2)
      },
      typeColor(type) {
        switch (type) {
          case 'Inflows':
            return 'green'
          case 'Outflows':
            return 'red'
          case 'Allocations':
            return 'yellow darken-2'
          default:
            return ''
        }
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
