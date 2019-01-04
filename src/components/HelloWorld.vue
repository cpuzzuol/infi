<template>
  <div>
    <section id="datepick-container">
      <button @click="prevDay">-</button>
      <select v-model="dt.format('MMMM')" @change="modifyDate" name="month">
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <select v-model="dt.format('D')" @change="modifyDate" name="day">
        <option v-for="day in dt.daysInMonth()" :value="day">{{ day }}</option>
      </select>
      <select v-model="dt.format('Y')" @change="modifyDate" name="year">
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>
      </select>
      <button @click="nextDay">+</button>
    </section>
    <!--
    <section id="day-container">
      <table>
        <caption>Data for {{ dt.format('dddd, MMMM D, Y')}}</caption>
        <tbody>
          <tr colspan="2">
            <th>Inflows</th>
          </tr>
          <tr>
            <td>Primary</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Investments</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Gifts</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Total Inflows</td>
            <td>$</td>
          </tr>
          <tr colspan="2">
            <th>Ouflows</th>
          </tr>
          <tr colspan="2">
            <th>Payroll Deductions</th>
          </tr>
          <tr>
            <td>Taxes</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Benefits</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Other</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Day Payroll Deductions</td>
            <td>$</td>
          </tr>
          <tr colspan="2">
            <th>Expenses</th>
          </tr>
          <tr>
            <td>Mortgage/HOA</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Gas/Electric</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Cable</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Groceries</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Car Payment/Insurance</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Gasoline</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Travel</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Cell Phone</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Health/Wellness</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Memberships/Subscriptions</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Gifts</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Discretionary</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Other</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Day Expenses</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Total Outflows</td>
            <td>$</td>
          </tr>
          <tr colspan="2">
            <th>Income Allocations</th>
          </tr>
          <tr>
            <td>Savings</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Retirement</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Investment Account</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Health Account</td>
            <td>$</td>
          </tr>
          <tr colspan="2">
            <th>Totals</th>
          </tr>
          <tr>
            <td>Day Total</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Day Free Cash</td>
            <td>$</td>
          </tr>
        </tbody>
      </table>
    </section>
  -->
    <v-container fluid>

      <v-data-table class="elevation-1"
                    v-model="selected"
                    :headers="headers"
                    :items="items"
                    :pagination.sync="pagination"
                    hide-actions
                    item-key="description"
                    expand
      >
        <template slot="headers" slot-scope="props">
          <tr>
            <th
                    v-for="header in props.headers"
                    :key="header.text"
                    :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                    @click="changeSort(header.value)"
            >
              <v-icon small>arrow_upward</v-icon>
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.description }}</td>
            <td class="text-xs-right">${{ props.item.amount }}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <v-card flat>
            <v-card-text>Peek-a-boo!</v-card-text>
          </v-card>
        </template>
      </v-data-table>
      <!--<v-data-table-->
      <!--v-model="selected"-->
      <!--:headers="headers"-->
      <!--:items="items"-->
      <!--:pagination.sync="pagination"-->
      <!--item-key="description"-->
      <!--class="elevation-1"-->
      <!--&gt;-->
      <!--<template slot="headers" slot-scope="props">-->
      <!--<tr>-->
      <!--<th-->
      <!--v-for="header in props.headers"-->
      <!--:key="header.text"-->
      <!--:class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"-->
      <!--@click="changeSort(header.value)"-->
      <!--&gt;-->
      <!--<v-icon small>arrow_upward</v-icon>-->
      <!--{{ header.text }}-->
      <!--</th>-->
      <!--</tr>-->
      <!--</template>-->
      <!--<template slot="items" slot-scope="props">-->
      <!--<tr>-->
      <!--<td>{{ props.item.description }}</td>-->
      <!--<td class="text-xs-right">${{ props.item.amount }}</td>-->
      <!--</tr>-->
      <!--</template>-->
      <!--</v-data-table>-->
    </v-container>
  </div>
</template>

<script>
    import moment from 'moment'
    import { data } from '@/assets/data'

    export default {
        name: 'HelloWorld',
        data () {
            return {
                dt: moment(),
                pagination: {
                    sortBy: 'description'
                },
                selected: [],
                headers: [
                    {
                        text: 'Category',
                        align: 'left',
                        value: 'category'
                    },
                    {text: 'Amount', value: 'amount'}
                ],
                items: []
            }
        },
        created () {
            this.getData()
        },
        computed: {
        },
        methods: {
            getData () {
                this.items = data
            },
            modifyDate (evt) {
                let dtPart = evt.target.name;
                let val = evt.target.value;
                switch (dtPart) {
                    case 'day':
                        this.dt = moment(this.dt).date(val);
                        break;
                    case 'month':
                        this.dt = moment(this.dt).month(val);
                        break;
                    case 'year':
                        this.dt = moment(this.dt).year(val);
                        break
                }
                this.getData()
            },
            nextDay () {
                this.dt = moment(this.dt).add(1, 'day');
                this.getData()
            },
            prevDay () {
                this.dt = moment(this.dt).subtract(1, 'day');
                this.getData()
            },
            toggleAll () {
                if (this.selected.length) this.selected = [];
                else this.selected = this.desserts.slice()
            },
            changeSort (column) {
                if (this.pagination.sortBy === column) {
                    this.pagination.descending = !this.pagination.descending
                } else {
                    this.pagination.sortBy = column;
                    this.pagination.descending = false
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
