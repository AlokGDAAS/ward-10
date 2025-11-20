import React from 'react'

const BLO = () => {

    const blo_data = [
        {
            id:1,
            booth_no:105,
            poll_st_name:"Bal Vikas - R-1",
            vote_areas:["Subhas road - Musafir khana","Kol wala compound", "Railway road"],
            blo:"Radharani -1",
            phone:"7895856664"
        },
        {
            id:2,
            booth_no:106,
            poll_st_name:"Bal Vikas - R-2",
            vote_areas:["Subhas road","Sarai nawab"],
            blo:"Jyoti Gupta -2",
            phone:"8707441644"
        },
        {
            id:3,
            booth_no:108,
            poll_st_name:"D.S. Inter College - R-1",
            vote_areas:["Railway quarter","Mal godam","Kalai compound","Sarai dubey","Hanuman Gali","Shahkamal road"],
            blo:"Asha -1",
            phone:"9368120585"
        },
        {
            id:4,
            booth_no:107,
            poll_st_name:"D.S. Inter College - R-2",
            vote_areas:["Shishiya pada","Shah kamal Road"],
            blo:"Hemlata Sharma",
            phone:"7417962366"
        },
        {
            id:5,
            booth_no:109,
            poll_st_name:"D.S. Inter College - R-3",
            vote_areas:["Sarai dubey"],
            blo:"Pradeep kumar suman",
            phone:"9456241867"
        },
        {
            id:6,
            booth_no:110,
            poll_st_name:"D.S. Degree College - R-1",
            vote_areas:["Parao Dubey","Peer Mittha","D.S.Degree College"],
            blo:"Meena Jayant",
            phone:"7906861078"
        },
        {
            id:7,
            booth_no:111,
            poll_st_name:"D.S. Degree College - R-2",
            vote_areas:["Parao dubey","Janki Bai Dharmashala"],
            blo:"Chandra kumar saksena",
            phone:"9760667378"
        },
        {
            id:8,
            booth_no:112,
            poll_st_name:"D.S. Degree College - R-3",
            vote_areas:["Sarai deen dayal","Achal kothi","Sadani bhavan"],
            blo:"Suman singh",
            phone:"9058761281"
        },
        {
            id:9,
            booth_no:113,
            poll_st_name:"D.S. Degree College - R-4",
            vote_areas:["Achal road","Gopiram paliwal road"],
            blo:"Rajesh kumar",
            phone:"9675885553"
        },
        {
            id:10,
            booth_no:114,
            poll_st_name:"D.S. Degree College - R-5",
            vote_areas:["Panna ganj","Motila coumpound","Ramlila ground","Achal road Ganesh mandir k samne","Malin basti","Novelty cinema G.T. Road"],
            blo:"Deepika varshney",
            phone:"7830362825"
        },
    ];

    return (
        <div className='w-23/24 mx-auto '>
            <div className='blo py-8 overflow-auto'>
                <table className='w-11/12 mx-auto '>
                    <thead>
                        <tr>
                            <th>Booth No.</th>
                            <th>Polling Station Name</th>
                            <th>Voting Areas</th>
                            <th>Name of B.L.O.</th>
                            <th>Contact No.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {blo_data.map((item, i) => (
                            <tr key={i}>
                                <td>{item.booth_no}</td>
                                <td>{item.poll_st_name}</td>

                                {/* Add safety check */}
                                <td>
                                    {(item.vote_areas || []).map((varea, v) => (
                                        <p key={v}>{varea}</p>
                                    ))}
                                </td>

                                <td>{item.blo}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='p-8'></div>
        </div>
    );
};

export default BLO;
