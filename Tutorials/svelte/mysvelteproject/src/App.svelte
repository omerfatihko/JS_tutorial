<script>
	import Modal from "./Modal.svelte";
	import AddBookForm from "./AddBookForm.svelte";

	let name = "Modafaka";
	let lanet = "lanet lanetlendik";
	let kufur = "adam ol lan";
	let firstName = "Bitch";
	let lastName = "Bitchinson";
	let showModal = false;	
	let kitapListesi = [
		{bookName: "hitchhiker's guide to the galaxy", noPages: 610, id: 1},
		{bookName: "Dune 1", noPages: 312, id: 2},
		{bookName: "the name of the wind", noPages: 783, id: 3}
	];
	//reactive value
	$: fullName = `${firstName} ${lastName}`;

	const handleClick = () => {
		lanet = "lanet kalktı"
	};
	
	const handleInput = (e) => {
		kufur = e.target.value;
	};
	const cahilles = (id) => {
		kitapListesi = kitapListesi.filter( (kitap) => kitap.id != id )
	};
	const toggleModal = () => {
		showModal = !showModal
	}
</script>

<Modal  message = "Why are you ghei" {showModal} on:click={toggleModal}>
	<AddBookForm/>
</Modal>
<main>
	<h1>Hello {name}!</h1>
	<!--<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>-->
	<p>{lanet}</p>
	<button on:click={handleClick}>laneti kaldır</button>
	<input type="text" bind:value={kufur}> <!--on:input={handleInput} value={kufur}-->
	<p>{kufur}</p>
	<p>Gimme yo name {fullName}</p>
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>
	<h2>Okuduğum kitaplar</h2>
	{#each kitapListesi as kitap (kitap.id)}
		<div>
			<h4>{kitap.bookName}</h4>
			<p>{kitap.noPages} sayfa</p>
			<button on:click={()=>cahilles(kitap.id)}>Cahilleş</button>
		</div>
	{:else}
		<p>Cahil köpek</p>
	{/each}
	<button on:click|once={toggleModal}>Are you ghei?</button>
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