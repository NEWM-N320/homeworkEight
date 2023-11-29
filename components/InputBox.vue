<!-- input box -->

<template>
        <div class="import-contain">
                <h1>Developing Teams With Vue</h1>
                <!-- create form -->
                <form @submit.prevent="subData">

                <!-- label for team name -->
                <label for="tName" class="roles-text"> Team Name:</label>
                <!-- input for team name -->
                <input type="text" id="tName" v-model="addedName" />

                <br/>

                <!-- "label" for group of choices -->
                <p class="roles-text">Select a Role:</p>

                <!-- group of choices -->
                <div class="group-choice">
                
                <!-- radio btns for options -->

                <!-- developer -->
                <input type="radio" class="develop" name="roles" value="Developer" v-model="addedRole" />
                <!-- label for developer -->
                <label for="develop">Developer</label> <br>

                <!-- designer -->
                <input type="radio" class="develop" name="roles" value="Designer" v-model="addedRole" />
                <label for="design">Designer</label> <br>

                <!-- ux/ui -->
                <input type="radio" class="develop" name="roles" value="UX/UI" v-model="addedRole" />
                <label for="uxi">UI/ UX</label> <br>
                </div>

                <!-- submit btn that is a slot -->
                <div class="slot">
                        <slotted-button type="submit">Submit</slotted-button>
                </div>
                </form>
        </div>
</template>

<!-- begin script -->
<script>

//import component
import SlottedButton from './slottedbutton.vue';
//begin exporting
export default {
        data() {
                return {
                
                        //added a name for team
                        addedName: '',

                        //added a role for team
                        addedRole: ''
                }
        }, 
        components: {
                 'slotted-button': SlottedButton,
                
                },
        emits: ['filterData'],
        methods: {

                //subData func
                subData() {
                        this.$emit('filterData',
                        this.addedName,
                        this.addedRole
                        )
                }
        }
}
</script>

<!-- styling for vue -->
<style>
/* container */
.import-contain {

        padding-left: 50px;
        padding-top: 50px;
}

/* h1 */
h1 {
        margin-left: 20px;
}
/* form */
form {
        background-color: #ded5cf;
        width: 500px;
        padding: 30px;
        border: 3px solid #000 ;
        border-radius: 20px;
        margin-bottom: 30px;
}

/* input box */
#tName {
        width: 200px;
        padding-left: 10px;
        height: 20px;
        background-color: #ded5cf;
        border: 2px solid #815355;
        margin-left: 10px;

}


.roles-text {
        font-size: 20px;
}


input[type=radio].develop { 
            accent-color: #717262; 
            margin-bottom: 10px;
            margin-right: 6px;
        } 

label[for= design], [for = develop] ,[for=uxi]{
        font-size: 18px;
}
</style>