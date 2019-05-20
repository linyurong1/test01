<template>
    <div id="app">
        <ul>
            <li v-for="item in list">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    el:"#app",
    data(){
       return {
           list:["123","123", "123"]
       }
    }
}
</script>