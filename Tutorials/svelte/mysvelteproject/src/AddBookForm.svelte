<script>
let bookName;
let noPages;
const handleSubmit = () => {}
</script>

<h3>Okuyom ben ya</h3>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Başlık" bind:value={bookName}>
    <input type="number" placeholder="sayfa" bind:value={noPages}>
    <button>Kitap ekle</button>
</form>

<style>

</style>