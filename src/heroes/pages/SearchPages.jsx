import { HeroCard } from "../components"


export const SearchPages = () => {
	return (
		<>
			<h1>Search</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>

					<form>
						<input 
							type="text" 
							placeholder="Search a hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
						/>
						<button className="btn btn-primary">
							Search
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>

					<div className="alert alert-primary">
						Search a hero
					</div>

					<div className="alert alert-danger">
						No hero with <b>ABC</b>
					</div>

					{/* <HeroCard /> */}
				</div>
			</div>
		</>
	)
}
