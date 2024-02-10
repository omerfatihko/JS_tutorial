<script>
    import {createEventDispatcher} from "svelte";
    import Button from "../shared/Button.svelte";

    let dispatch = createEventDispatcher();
    let fields = {question: "", optionA: "", optionB: ""};
    let errors = {question: "", optionA: "", optionB: ""};
    let valid = false;

    const submitHandler = () => {
        valid = true;

        //validate question
        if (fields.question.trim().length < 5){
            valid = false;
            errors.question = "Question must be at least 5 characters long";
        }else {
            errors.question = "";
        }
        //validate option a
        if (fields.optionA.trim().length < 1){
            valid = false;
            errors.optionA = "Option A cannot be empty";
        }else {
            errors.optionA = "";
        }
        //validate option b
        if (fields.optionB.trim().length < 1){
            valid = false;
            errors.optionB = "Option B cannot be empty";
        }else {
            errors.optionB = "";
        }
        //add new poll
        if (valid){
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()};
            dispatch("add", poll);
        }
        
    }
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Enter your question here</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="option-a">Enter first option here</label>
        <input type="text" id="option-a" bind:value={fields.optionA}>
        <div class="error">{errors.optionA}</div>
    </div>
    <div class="form-field">
        <label for="option-b">Enter second option here</label>
        <input type="text" id="option-b" bind:value={fields.optionB}>
        <div class="error">{errors.optionB}</div>
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
    .error{
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>