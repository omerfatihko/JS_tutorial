<script>
    import Card from "../shared/Card.svelte";
    export let poll;

    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    //reactive value
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100/totalVotes*poll.votesA);
    $: percentB = Math.floor(100/totalVotes*poll.votesB);

    //handle voting
    const handleVote = (option, id) => {
        dispatch("vote", {option, id})
    };
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total votes: {totalVotes}</p>
        <div class="option" on:click={() => handleVote("a", poll.id)}>
            <div class="percent percent-a" style="width: {percentA}%"></div>
            <span>{poll.optionA} ({poll.votesA})</span>
        </div>
        <div class="option" on:click={() => handleVote("b", poll.id)}>
            <div class="percent percent-b" style="width: {percentB}%"></div>
            <span>{poll.optionB} ({poll.votesB})</span>
        </div>
    </div>
</Card>

<style>
    h3{
        margin: 0 auto;
        color: #555;
    }
    p{
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .option{
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .option:hover{
        opacity: 0.6;
    }
    span{
        display: inline-block;
        padding: 10px 20px;
    }
    .percent{
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a{
        background: rgba(217, 27, 66, 0.2);
        border-left: 4px solid #d91b42;
    }
    .percent-b{
        background: rgba(69, 196, 150, 0.2);
        border-left: 4px solid #45c496;
    }
</style>