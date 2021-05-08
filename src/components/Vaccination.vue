<template>
  <div>
    <div class="row" ref="generate">
        <div class="col-md-6" v-for="(item, index) in availablePlaces" :key="index">
            <div class="card" style="width: 18rem; margin-bottom: 10px">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p class="card-text">
                    Address : {{item.address}} ,
                    {{item.block_name}},
                    {{item.pincode}} ,
                </p>
                <div v-for="(session,index2) in item.sessions" :key="index2">
                    <p>Session: {{session.date}} <span><strong>{{session.available_capacity}}</strong></span></p>  
                    <ul v-for="(slot,ind) in session.slots" :key="ind">
                        <li>{{slot}}</li>
                    </ul>
                </div>

            </div>
            </div>
        </div>
        
    </div>

  </div>
</template>

<script>
export default {

    data() {
        return {
            counter: 0,
            todaysDate: '',
            availablePlaces: [],
            status: ''
        }
    },

    methods: {

        sendMail() {
            setTimeout(() => {
                if( this.availablePlaces.length ) {
                    this.$http.post('https://hopinstyle-backend.herokuapp.com/api/mailer/vaccinationStatus', { subject: 'Vaccination Slot Available', status : this.$refs.generate.innerHTML})
                    .then(response => {
                        console.log(response)
                    });    
                }
                
                this.counter++;
                if( this.counter < 2 ) {
                    this.checkForAvailableSlot();
                }
            }, 3600);
        },

        formatDate( date ) {
            let d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [day, month, year].join('-');
        },

        async checkForAvailableSlot() {
            let response = await this.$http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=1&date=${this.todaysDate}`);
            // for (let i = 0; i < response.data.centers.length; i++) {
                

            // }
            this.availablePlaces =  response.data.centers.filter( v => {
                if( v.sessions.filter( nv => nv.available_capacity > 0).length ) {
                    return v;
                }
            });

            // this.buildUserFriendlyInfoCards();
            
            this.sendMail();
        },

    },

    mounted() {
        this.todaysDate = this.formatDate( new Date() );
        this.checkForAvailableSlot()
       
    },
    
    

}
</script>

<style>

</style>