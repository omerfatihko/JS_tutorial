<script>
    import Button from "../shared/Button.svelte";
    let fields = {question: "", optionA: "", optionB: ""};
    const submitHandler = () => {
        console.log(fields)
    }
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Enter your question here</label>
        <input type="text" id="question" bind:value={fields.question}>
    </div>
    <div class="form-field">
        <label for="option-a">Enter first option here</label>
        <input type="text" id="option-a" bind:value={fields.optionA}>
    </div>
    <div class="form-field">
        <label for="option-b">Enter second option here</label>
        <input type="text" id="option-b" bind:value={fields.optionB}>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field{
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
</style>