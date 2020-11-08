import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { addEvent } from '../redux/reducers/events'
import '../assets/scss/main.scss'

const EventModal = ({ modalIsOpen, closeModal }) => {
  const [event, setEvent] = useState({})
  const dispatch = useDispatch()
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
      <form className="w-full">
        <div className="mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Project name
            </label>
          </div>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Project name"
              onChange={(e) => setEvent({ ...event, name: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Date start
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
                id="grid-first-name"
                type="date"
                onChange={(e) => setEvent({ ...event, dateStart: e.target.value })}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Date end
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight "
                id="grid-last-name"
                type="date"
                onChange={(e) => setEvent({ ...event, dateEnd: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Supervisor
            </label>
          </div>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Supervisor"
              onChange={(e) => setEvent({ ...event, supervisor: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Admin
            </label>
          </div>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Admin"
              onChange={(e) => setEvent({ ...event, admin: e.target.value })}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => {
                dispatch(addEvent(event))
                closeModal()
              }}
            >
              Add event
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default EventModal
