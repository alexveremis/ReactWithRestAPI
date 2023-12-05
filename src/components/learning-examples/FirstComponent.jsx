  const person ={
    name: 'Alex',
    address: {
      line1: 'Baker Street',
      city: 'Athens',
      country: 'Greece',
    },
    profiles: ['tw', 'fb' ,'insta'],
    printProfile: () => {
      person.profiles.map(
        (profile) => {
          console.log(profile)
         }
      )
    } 
  }

  export default function FirstComponent() {
    return(
      <div className='FirstComponent'>First Component</div>
    )
  }