import React from 'react'
import { useSelector } from 'react-redux'
import EventModal from './event-modal'
import '../assets/scss/main.scss'

const Event = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const events = useSelector((s) => s.events.events)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-hairline"
          onClick={openModal}
        >
          Add project
        </button>
      </div>
      <div className="flex flex-wrap -mx-3 mt-3">
        <div className="w-1/3 px-3">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="project"
              className="rounded overflow-hidden shadow-lg"
            />
            <div className="p-2">
              <h3>New project</h3>
              <p>Date start : Date end</p>
              <p>Supervisor</p>
              <p>Admin</p>
            </div>
          </div>
        </div>
        {events.map((event, index) => (
          <div key={index} className="w-1/3 px-3">
            <div className="rounded overflow-hidden shadow-lg">
              <img
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="project"
                className="rounded overflow-hidden shadow-lg"
              />
              <div className="p-2">
                <h3>{event.name}</h3>
                <p>
                  {event.dateStart} : {event.dateEnd}
                </p>
                <p>{event.supervisor}</p>
                <p>{event.admin}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EventModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  )
}

export default Event
