<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";

	//tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem = "Current Polls";
	const tabChange = (e) => {
		activeItem = e.detail;
	}

	//polls
	let polls = [
		{
			id:1,
			question: "Dummy question",
			optionA: "Dummy option A",
			optionB: "Dummy option B",
			votesA: 7,
			votesB: 3
		},
	]

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeItem = "Current Polls";
		//console.log(polls);
	}

	const handleVote = (e) => {
		const {option, id} = e.detail;
		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
		if (option === "a"){
			upvotedPoll.votesA++;
		}
		if (option === "b"){
			upvotedPoll.votesB++;
		}
		polls = copiedPolls;
	}
</script>

<Header/>
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === "Current Polls"}
		<PollList {polls} on:vote={handleVote}/>
	{:else if activeItem === "Add New Poll"}
		<CreatePollForm on:add={handleAdd}/>
	{/if}
</main>
<Footer/>

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>