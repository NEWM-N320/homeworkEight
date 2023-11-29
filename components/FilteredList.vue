<!-- filtered list -->
<template>
        <div class="fil-list-contain">
        <!-- include member info w a for loop to iterate through info -->
        <member-listed v-for="m in members" :key="m.id"
        :showRole="showRole"
        :role="m.role"
        :team="m.team"
        :teamName="teamName"
        :id="m.id"
        @joinTeam="joinTeam">

        <!-- begin templates w information abt a member -->

        <!-- member name -->
        <template #mName> Name: {{m.name}}</template>

        <!-- member role -->
        <template #mRole> Role: {{m.role}}</template>

        <!-- member id -->
        <template #mID> ID: {{m.id}}</template>
        
        <!-- member phone number -->
        <template #mPNum> Phone Number: {{m.phone}}</template>

        <!-- member email -->
        <template #mEnail> Email Address: {{m.email}}</template>
        
        <!-- if team name is not left blank, insert a team name for them -->
        <template #mTeam v-if="m.team !== ''"> Team: {{m.team}}</template>
        
        <!-- if there is no team name selected for them, say there is no team -->
        <template #mEmptyTeam  v-if="m.team === ''">Not part of any team.</template>
        </member-listed>
        </div>
</template>

<!-- begin script -->
<script>

// import component
import MemberListed from './MemberListed.vue';

//begin export 
export default {
        data() {
                return {

                }
        },
        components: {
    'member-listed': MemberListed,
  },
        props: ['members', 'showRole', 'teamName'],

        methods: {
                joinTeam(id, team) {
                        this.$emit('joinTeam', id, team);
                }
        }
}
</script>