<script>
    export let message;
    export let showModal = false;
    export let isGhei = false;
    let gheigif = "images/yrughei.gif";
</script>

{#if showModal}
    <div class="backdrop" class:stat={isGhei} on:click>
        <div class="modal">
            <h2>{message}</h2>
            <img src={gheigif} alt="">
        </div>
    </div>
{/if}

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
    }
    .modal{
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }
    .stat .modal{
        background: crimson;
        color: white;
    }
</style>