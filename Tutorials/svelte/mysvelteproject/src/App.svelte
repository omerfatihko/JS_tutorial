<script>
	let name = "Modafaka";
	let lanet = "lanet lanetlendik";
	let kufur = "adam ol lan";
	const handleClick = () => {
		lanet = "lanet kalktı"
	};
	const handleInput = (e) => {
		kufur = e.target.value;
	};
</script>

<main>
	<h1>Hello {name}!</h1>
	<!--<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>-->
	<p>{lanet}</p>
	<button on:click={handleClick}>laneti kaldır</button>
	<input type="text" bind:value={kufur}> <!--on:input={handleInput} value={kufur}-->
	<p>{kufur}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>