

<template>
    <form>
        <input type="text" placeholder="Upisite ime i prezime">
        <button type="submit">Unesi</button>
    </form>
</template>

<script>
export default {
    data (){
        return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form{
    all: unset;
    border-top: 1px solid #efefef;
    margin-top: 20px;
    padding-top: 20px;
    display: flex;
}

input{
    all: unset;
    padding: 12px;
    border: 1px solid #ddd;
    flex: 1;
    text-align: left;
}

button{
    all: unset;
    background: black;
    color: white;
    padding: 12px 30px;
}
</style>
