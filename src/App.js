import './Tail.css';
import './index.css';
import Navbar from './Component/Navbar';
import serviceImage from './image/pexels-antoni-shkraba.png';
import profileImage from './image/profile.png';

function App() {
  return (
    <div className="flex bg-grey-400 mx-auto">
      <Navbar/>
      <div className='bg-slate-100 pt-6 pb-16 px-2'>
        <Header userName="Amanda Bynes" />

        <div className="container my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <AppointmentCard title="Upcoming Appointment" time="3:00pm 23/3/23" buttonText="View" />
          <AppointmentCard title="Previous Appointment" time="3:00pm 23/3/23" buttonText="View" />
          <AppointmentCard title="Current Prescription" time="3:00pm 23/3/23" buttonText="View" />
        </div>

        <h2 className="text-2xl font-bold my-4">Available Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-10">
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          <ServiceCard title="Acupuncture" description="Galant" imageUrl={serviceImage}/>
          {/* ... other services */}
        </div>

        <h2 className="text-2xl font-bold my-4">Health Practitioners</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-10">
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          <PractitionerCard name="Greg Smith" specialty="Acupuncture" imageUrl={profileImage} />
          {/* ... other practitioners */}
        </div>
      </div>
    </div>
  );
}

const Header = ({ userName }) => {
  return (
    <div>
      <h1 className="header_text">
        Welcome, {userName}
      </h1>
    </div>
  );
};

const AppointmentCard = ({ title, time, buttonText }) => {
  return (
    <div className="bg-white p-6 mx-4 shadow rounded">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{time}</p>
      <button className="appointment_button_text mt-4 font-bold py-2 px-4 rounded">
        {buttonText}
      </button>
    </div>
  );
};

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className='w-48'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={imageUrl}  alt="Service" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
      <button className="service_card_button w-full text-white font-bold py-2 px-4 rounded">
        Book Now
      </button>
    </div>
  );
};



const PractitionerCard = ({ name, specialty, imageUrl }) => {
  return (
    <div className="bg-white shadow rounded text-center">
      <img className="w-full h-42 mx-auto" src={imageUrl} alt={name} />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">{specialty}</p>
    </div>
  );
};





export default App;
