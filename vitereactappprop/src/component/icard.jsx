import react from 'react';
function icard(props)
{
    return (
        <>
        <h2>ICard</h2>
        <div className="icard">
        <div className="profile">
        <h3>Name:{props.name}</h3>
            <img src="./public/profile.png" alt="profile" width={100}/>
        </div>
        <h3>Age:{props.age}</h3>
        <h3>College:{props.college}</h3>
        <h3>Branch:{props.branch}</h3>
        <h3>Year:{props.year}</h3>
        <h3>Rollno:{props.rollno}</h3>
        </div>
        </>
    )
}
export default icard;