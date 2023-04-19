<template>
    <v-container>
        <v-row justify="center" class="text-center">
            <v-col class="my-4 px-10">
                <template>
                    <v-card>
                        <v-card-title>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Pesquisar" single-line hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="desserts" :search="search" :items-per-page="4" class="elevation-1">
                            <template v-slot:top>
                                <v-toolbar flat>
                                    <v-toolbar-title>Loan List</v-toolbar-title>
                                    <v-divider class="mx-4" inset vertical></v-divider>
                                    <v-spacer></v-spacer>
                                    <v-dialog v-model="dialog" max-width="500px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">Novo Item</v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title><span class="text-h5">{{ formTitle }}</span></v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.type" label="Type"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.autoDecline" label="autoDecline"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.firstPaymentDate" label="firstPaymentDate"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.disbursementDate" label="disbursementDate"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.totalAmount" label="totalAmount"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.disbursedAmount" label="disbursedAmount"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.numberOfInstallments" label="numberOfInstallments"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.createdAt" label="createdAt"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem.expiryDate" label="expiryDate"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                                                <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                    <v-dialog v-model="dialogDelete" max-width="500px">
                                        <v-card>
                                            <v-card-title class="text-h5">Deseja realmente excluir este item?</v-card-title>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                                <v-spacer></v-spacer>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                            </template>
                            <template v-slot:no-data>
                                <v-btn color="primary" @click="initialize">Reset</v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data: () => ({
            search: '',
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                    text: 'id',
                    value: 'id',
                    filterable: false,
                    sortable: false,
                },
                {
                    text: 'status',
                    value: 'status',
                    filterable: true,
                    sortable: false,
                },
                {
                    text: 'contractNumber',
                    align: 'start',
                    value: 'contractNumber',
                    filterable: false,
                    sortable: false,
                },
                {
                    text: 'type',
                    value: 'type',
                    filterable: false,
                    sortable: false,
                },
                {
                    text: 'autoDecline',
                    value: 'autoDecline',
                    filterable: false,
                    sortable: false,
                },
                {
                    text: 'firstPaymentDate',
                    value: 'firstPaymentDate',
                    filterable: true,
                    sortable: true,
                },
                {
                    text: 'disbursementDate',
                    value: 'disbursementDate',
                    filterable: true,
                    sortable: true,
                },
                {
                    text: 'totalAmount',
                    value: 'totalAmount',
                    filterable: false,
                    sortable: true,
                },
                {
                    text: 'disbursedAmount',
                    value: 'disbursedAmount',
                    filterable: false,
                    sortable: true,
                },
                {
                    text: 'numberOfInstallments',
                    value: 'numberOfInstallments',
                    filterable: false,
                    sortable: false,
                },
                {
                    text: 'createdAt',
                    value: 'createdAt',
                    filterable: false,
                    sortable: false,
                },
                {
                    text: 'expiryDate',
                    value: 'expiryDate',
                    filterable: true,
                    sortable: true,
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false
                },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'Novo Item' : 'Editar Item'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            dialogDelete(val) {
                val || this.closeDelete()
            },
        },

        created() {
            this.initialize()
            console.log(this.desserts)
        },

        methods: {
            async getLoans() {
                await axios.get('http://localhost:3001/loans')
                .then(response => {
                    console.log(response)
                    this.desserts = response.data.items
                })
                .catch(error => {
                    console.log(error)
                })
            },

            initialize() {
                this.getLoans()
            },

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialogDelete = true
            },

            deleteItemConfirm() {
                this.desserts.splice(this.editedIndex, 1)
                this.closeDelete()
            },

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            closeDelete() {
                this.dialogDelete = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
        },
    }
</script>
