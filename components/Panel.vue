<template>
 <div class="panelWrap"> 
    <div class="panel-title">
       {{ panelData.title }}
    </div> 
    <div class="panel-body">
        {{ panelData.value }}
    </div>
    <div class="panel-unit">
        {{ panelData.unit }}
    </div>
 </div>
</template>

<script>


export default {
    name: 'panel',
    data() {
        return {
     

        }
    },
    components: {
        
    },
    props: [
        "panelData"
    ]
}
</script>
<style lang="scss">
.panelWrap {
    padding:7px;
    border: 1px solid windowtext;
    height: 90px;
    background-color: rgb(79, 138, 138);

    .panel-title, .panel-unit {
        color: white;
    }
    .panel-body {
        font-size:2.3em;
        color: yellow;
    }
}
</style>