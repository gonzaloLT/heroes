import queryString from "query-string"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers/getHeroesByName"


export const SearchPages = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);
	
	const heroes = getHeroesByName(q)

	const showSearch = (q === '');
	const showError = (q.length > 0) && (heroes.length === 0)
	
	const {searchText, onInputChange} = useForm({
		searchText: q
	})

	const onSubmitForm = (e) =>{
		e.preventDefault();

		navigate(`?q=${ searchText }`);
	}


	return (
		<>
			<h1>Search</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>

					<form onClick={onSubmitForm}>
						<input 
							type="text" 
							placeholder="Search a hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
						/>
						<button className="btn btn-primary">
							Search
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>

					<div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>
						Search a hero
					</div>

					<div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
						No hero with <b>{q}</b>
					</div>

					{
						heroes.map(hero => (
							<HeroCard key={hero.id} {...hero}/>
						))
					}

				</div>
			</div>
		</>
	)
}
