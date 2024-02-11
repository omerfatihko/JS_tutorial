<script>
    export let poll;

    //reactive value
    $: totalVotes = poll.votesA + poll.votesB;
</script>

<div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div class="option">
        <div class="percent percent-a"></div>
        <span>{poll.optionA} ({poll.votesA})</span>
    </div>
    <div class="option">
        <div class="percent percent-b"></div>
        <span>{poll.optionB} ({poll.votesB})</span>
    </div>
</div>

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
</style>