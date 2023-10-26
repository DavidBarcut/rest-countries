import Flags from './Flags.js'
//imports the flags to send to the frontend 
//gathers all the information on the desired country to be displayed

function CountryInfo({country}) {
    
    return (
      <table>
        <thead>
			<tr>
				<th>NAME</th>
				<td>{country ? (Object.values(country[0].name.nativeName)[0].common):""}</td>
			</tr>
		</thead>
		<tbody>
            <tr>
				<th>FLAG:</th>
				<td><Flags url =    {country ? (Object.values(country[0].flags )[0]):"" } ></Flags></td>
			</tr>
			<tr>
				<th>CURRENCY:</th>
				<td>{country ? (Object.values(country[0].currencies)[0].name):""}</td>
			</tr>
			<tr>
				<th>CAPITAL:</th>
				<td>{country ? (Object.values(country[0].capital)):""}</td>
			</tr>
			<tr>
				<th>REGION:</th>
				<td>{country ? (Object.values(country[0].region)):""}</td>
			</tr>
			<tr>
				<th>LANGUAGE:</th>
				<td>{country ? (Object.values(country[0].languages)[0]):""}</td>
			</tr>
			<tr>
				<th>TIMEZONE:</th>
				<td>{country ? (Object.values(country[0].timezones)[0]):""}</td>
			</tr>
			<tr>
				<th>CONTINENT:</th>
				<td>{country ? (Object.values(country[0].continents)[0]):""}</td>
			</tr>
		</tbody>
	</table>
        
      
    );
  }

  

  export default CountryInfo;