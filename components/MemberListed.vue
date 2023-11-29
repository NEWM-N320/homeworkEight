<!-- member listed info -->
<template>
        <div class="mem-list-contain" v-if="role === showRole">
        <!-- insert a slotted btn, if no team has been chosen for mem, insert this btn to join teeam-->
        <slotted-button v-if="team === ''" @click="joinTeam(id, teamName)" class="join-btn">Join {{ teamName }}</slotted-button>
          <!-- include slot btn to show or hide data -->
          <slotted-button v-on:click="switchDetails" class="details">{{ showData && "Hide" || "Show" }} Details</slotted-button>

        <!-- member name -->
        <p class="name">
                <slot name="mName"></slot>
        </p>

        <!-- member role -->
        <p class="role">
                <slot name="mRole"></slot>
        </p>


        <!-- if there is data to show -->
        <div class="memberInfo" v-if="showData">

        <!-- member id -->
        <p class="memID">
                <slot name="mID"></slot>
        </p>

        <!-- member phone number -->
        <p class="pNum">
                <slot name="mPNum"></slot>
        </p>

        <!-- member email -->
        <p class="email">
                <slot name="mEmail"></slot>
        </p>

        <!-- member team -->
        <p class="mem-team">
             Team Name: {{ team }}
        </p>

        <p class="noTeam" v-if="team === ''">
                <slot name="mEmptyTeam"></slot>
        </p>
        </div>
        </div>
</template>

<!-- begin script -->
<script>

//import component
import SlottedButton from './slottedbutton.vue';

//begin export
export default {
        data() {
                return {

                        //right off, do not show data
                        showData: false,
                         // init team state, auto set to no team unless called into one
                         team: '',

                }
        },
        components: {
                 'slotted-button': SlottedButton,
                
                },

        props: ['role', 'showRole', 'teamName', 'id'],

        methods: {

                //switch details func
                switchDetails(){
                        if (this.showData) {
                                this.showData = false;
                        } else {
                                this.showData = true;
                        }
                },

                //join team func
                joinTeam(id, teamName) {
                        // update the team name
                        this.team = teamName;
                        this.$emit('join-team', id, teamName);
                }

        }
}
</script>

<!-- styling -->
<style>
/* join btn */
.join-btn, .details {
        margin-top: 20px;
        margin-left: 50px;
}

/* container for members */
.mem-list-contain {
        background-color: #f8dcd1;
        margin-bottom: 30px;
        border: 3px solid #ce9f95;
        border-radius: 20px;
        padding: 20px;
        width: 500px;
        margin-left: 50px
 
}
     
/* information of members */
.memberInfo {
        background-color: #ae887b;
        color: #fff;
        margin-top: 10px;
        padding: 10px;
        border: 2px splid #ce9f95;
        border-radius: 20px;
}


/* change all fonts */
p {
        font-size: 20px;
}
</style>