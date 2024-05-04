import './Cardbox.css';

const Cardbox = () => {
    return (
        <section className='card-box'>
            <div className='card'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-rocket-launch-startup-business-mission-space-marketing-4-5432.png" alt="" />
                <h2 className='card-head'>2500+</h2>
                <p className='card-para'>Enterprise organizations successfully launched</p>
            </div>
            <div className='card'>
                <img src="https://cdn-icons-png.flaticon.com/512/4585/4585036.png" alt="" />
                <h2 className='card-head'>45000+</h2>
                <p className='card-para'>Enterprise user onboarded seamlessly</p>
            </div>
            <div className='card'>
                <img src="https://cdn.icon-icons.com/icons2/2995/PNG/512/messages_people_person_bubble_oval_icon_187464.png" alt="" />
                <h2 className='card-head'>200000+</h2>
                <p className='card-para'>Professionals trained on product and startegy</p>
            </div>
        </section>
    );
}

export default Cardbox;
