<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import mongoose from 'mongoose';
	import { onMount } from 'svelte';
	import { currentDateUTC } from './model';
	import type { IUser } from './types';

	export const load: Load = async ({ fetch }) => {
		try {
			const resp: Response = await fetch('/api', { method: 'GET' });
			const users: IUser[] = await resp.json();
			return {
				props: {
					status: 200,
					body: users
				}
			};
		} catch (error) {
			return {
				status: 500,
				body: 'Internal Server Error!'
			};
		}
	};
</script>

<script lang="ts">
	let fullName = '';
	let email = '';
	let users$ = [];

	export let body;

	const addUsers = async () => {
		if (fullName && email) {
			const d = new Date();
			const body = {
				_id: new mongoose.Types.ObjectId(),
				fullName,
				email,
				created: currentDateUTC()
			};
			try {
				const resp = await fetch('/api', {
					method: 'POST',
					body: JSON.stringify(body)
				});
				console.log(resp);
				if (resp?.ok) {
					alert('Success!');
				}
			} catch (e) {
				console.log(e);
				alert('error');
			}
		}
	};

	const AddUserMongoose = async () => {
		if (fullName && email) {
			const d = new Date();
			const body = {
				_id: new mongoose.Types.ObjectId(),
				fullName,
				email,
				created: currentDateUTC()
			};
			const resp = await fetch('/api/mongoose', {
				method: 'POST',
				body: JSON.stringify(body)
			});

			console.log(resp);
		}
	};

	onMount(async () => {
		const resp: Response = await fetch('/api/mongoose', { method: 'GET' });
		if (resp.ok) {
			users$ = await resp.json();
		}
	});
</script>

<div class="px-4 py-4">
	<form on:submit|preventDefault={AddUserMongoose} method="post">
		fullName: <input type="text" bind:value={fullName} /> <br />
		email: <input type="email" bind:value={email} /> <br />
		<button type="submit" class="px-2 bg-red-600 text-white rounded mt-2">Submit</button>
	</form>

	<hr />
	<h2>MongoClient</h2>
	<div>
		{#each body as { _id, email, fullName, created }}
			<div class="flex flex-col">
				<div class="flex flex-row">
					<div class="p-2">Email: {email}</div>
					<div class="p-2">Created: {new Date(created)}</div>
				</div>
			</div>
		{/each}
	</div>

	<hr />
	<h3>Mongoose</h3>
	<div>
		{#each users$ as { email, created }}
			<div class="flex flex-col">
				<div class="flex flex-row">
					<div class="p-2">Email: {email}</div>
					<div class="p-2">Created: {created}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
