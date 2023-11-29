
<template>
        
        <div>
       <input-box></input-box>
        </div>
        </template>
        <script>
        
        import InputBox from '../components/InputBox.vue';
        export default {
                components: {
                        InputBox
                },
                props: ['greeting', 'who', 'count', 'book', 'myVue']
        }
        </script>