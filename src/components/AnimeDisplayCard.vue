<template>
<div>
    <div class="card"  @click="$emit('selectedAnime', link)">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h6 class="card-title">{{title}}
                <br>
                <span class="badge badge-success">Episode {{link.split('-')[link.split('-').length - 1]}}</span>
            </h6>
            <p class="card-text"></p>            
        </div>
    </div> 

</div>
  
</template>

<script>
export default {

    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }

}
</script>

<style scoped>
    .card {
        width: 225px;
        min-height: 250px;
        max-height: 350px;
        margin: 20px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        /* padding: 14px 80px 18px 36px; */
        cursor: pointer;

    }

    .card:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }

    .card-img-top {
        height: 250px;
        width: 225px;
    }

   
    .card-title {
        text-align: center;
        font-weight: bold;
    }

    h5 {
        padding: 8px;
    }

    .badge {
       margin-top: 8px;
    }

    .btn {
        text-align: center;
    }
    
</style>>
