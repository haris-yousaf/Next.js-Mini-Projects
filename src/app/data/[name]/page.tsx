import Link from 'next/link'
import './data.css'

const getAge = async (name: string) => {

    const res = await fetch(`https://api.agify.io?name=${name}`)
    return res.json()
}

const getGender = async (name: string) => {

    const res = await fetch(`https://api.genderize.io?name=${name}`)
    return res.json()
}

const getCountry = async (name: string) => {

    const res = await fetch(`https://api.nationalize.io?name=${name}`)
    return res.json()
}

interface Params{
    params: {name: string}
}

export default async function Data({params}: Params) {

    const age = await getAge(params.name)
    const gender = await getGender(params.name)
    const country = await getCountry(params.name)
    return(
        <div>
            <div className='main'>
                <div className='heading'>User Data</div>
                <div>Name: <span>{params.name}</span></div>
                <div>Age: <span>{age?.age}</span></div>
                <div>Gender: <span>{gender?.gender}</span></div>
                <div>Country: <span>{country?.country[0]?.country_id}</span></div>
                <button><Link href='/' className='button'>Back</Link></button>
            </div>
        </div>
    )
}