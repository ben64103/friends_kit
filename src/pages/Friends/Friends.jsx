import useDocumentTitle from '@/hooks/useDocumentTitle';
import SearchIcon from '@/shared/components/icons/SearchIcon';
import avatar from '@/assets/images/avatar-w.webp';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownItem } from 'flowbite-react';

const friendsArray = [
  {
    name: 'Milly Augustine',
    location: 'From Rome',
    imgSrc: 'assets/img/avatars/milly.jpg',
    dataUserPopover: 7,
  },
  {
    name: 'Dan Walker',
    location: 'From New York',
    imgSrc: 'assets/img/avatars/dan.jpg',
    dataUserPopover: 1,
  },
  {
    name: 'Stella Bergmann',
    location: 'From Berlin',
    imgSrc: 'assets/img/avatars/stella.jpg',
    dataUserPopover: 2,
  },
  {
    name: 'David Kim',
    location: 'From Chicago',
    imgSrc: 'assets/img/avatars/david.jpg',
    dataUserPopover: 4,
  },
  {
    name: 'Daniel Wellington',
    location: 'From London',
    imgSrc: 'assets/img/avatars/daniel.jpg',
    dataUserPopover: 3,
  },
  {
    name: 'Nelly Schwartz',
    location: 'From Melbourne',
    imgSrc: 'assets/img/avatars/nelly.png',
    dataUserPopover: 9,
  },
  {
    name: 'Rolf Krupp',
    location: 'From Berlin',
    imgSrc: 'assets/img/avatars/rolf.jpg',
    dataUserPopover: 13,
  },
  {
    name: 'Brian Stevenson',
    location: 'From San Diego',
    imgSrc: 'assets/img/avatars/brian.jpg',
    dataUserPopover: 19,
  },
  {
    name: 'Bobby Brown',
    location: 'From Paris',
    imgSrc: 'assets/img/avatars/bobby.jpg',
    dataUserPopover: 8,
  },
  {
    name: 'Azzouz El Paytoun',
    location: 'From Montreal',
    imgSrc: 'assets/img/avatars/azzouz.jpg',
    dataUserPopover: 20,
  },
  {
    name: 'Elise Walker',
    location: 'From London',
    imgSrc: 'assets/img/avatars/elise.jpg',
    dataUserPopover: 6,
  },
  {
    name: 'Aline Cambell',
    location: 'From Seattle',
    imgSrc: 'assets/img/avatars/aline.jpg',
    dataUserPopover: 16,
  },
  {
    name: 'Mike Lasalle',
    location: 'From Toronto',
    imgSrc: 'assets/img/avatars/mike.jpg',
    dataUserPopover: 12,
  },
  {
    name: 'Mike Donovan',
    location: 'From San Francisco',
    imgSrc: 'assets/img/avatars/michael.jpg',
    dataUserPopover: 17,
  },
  {
    name: 'Lana Henrikssen',
    location: 'From Helsinki',
    imgSrc: 'assets/img/avatars/lana.jpeg',
    dataUserPopover: 10,
  },
  {
    name: 'Leana Marks',
    location: 'From Nashville',
    imgSrc: 'assets/img/avatars/leana.jpg',
    dataUserPopover: 15,
  },
  {
    name: 'Ken Rogers',
    location: 'From Chicago',
    imgSrc: 'assets/img/avatars/ken.jpg',
    dataUserPopover: 14,
  },
  {
    name: 'Gaelle Morris',
    location: 'From Lyon',
    imgSrc: 'assets/img/avatars/gaelle.jpeg',
    dataUserPopover: 11,
  },
  {
    name: 'Edward Mayers',
    location: 'From Dublin',
    imgSrc: 'assets/img/avatars/edward.jpeg',
    dataUserPopover: 5,
  },
];

const Friends = () => {
  useDocumentTitle('profile-friends');
  return (
    <section className='friends-list'>
      <header>
        <div className='flex items-center justify-between mt-3 ps-4 p-2 bg-white rounded-md shadow-tiny'>
          <div className='dropdown'>
            {' '}
            <Dropdown
              label=''
              className='w-56 z-40'
              renderTrigger={() => <span className='cursor-pointer'>All Friends</span>}
              inline>
              <DropdownItem className='flex flex-col items-start'>
                <h3>Close Friends</h3>
                <small>your closest friends list</small>
              </DropdownItem>
              <DropdownItem className='flex flex-col items-start'>
                <h3>Followed</h3>
                <small>Friends you are following</small>
              </DropdownItem>
              <DropdownItem className='flex flex-col items-start'>
                <h3>Work relations</h3>
                <small>Your work relations</small>
              </DropdownItem>
              <DropdownItem className='flex flex-col items-start'>
                <h3>Sign out</h3>
                <small>Your pending friend requests</small>
              </DropdownItem>
            </Dropdown>
          </div>
          <div className='relative w-64 me-3' id='search-friends-input'>
            <input
              id='search'
              type='search'
              className='peer block w-full p-1.5 ps-9 text-sm text-gray-800 bg-white border border-gray-300 rounded-full outline-none  focus:border focus:border-blue-600 focus:shadow-sm transition-03'
              placeholder='Search'
            />
            <div
              id='icon'
              className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 p-2 text-gray-400 pointer-events-none peer-focus:text-blue-600 transition-03'>
              <SearchIcon cs='w-4 h-4' />
              <span className='sr-only'>Search icon</span>
            </div>
          </div>
        </div>
      </header>

      <div className='friends-grid'>
        <div className='friend-item grid grid-cols-4 text-center mt-4'>
          {friendsArray.map((friend) => (
            <div className='p-2'>
              <div className='group flex flex-col items-center justify-center text-center p-[30px] bg-white border border-gray-300 rounded-md hover:shadow-lg'>
                <Link to='#'>
                  <div className='relative flex-center h-[90px] w-[90px]'>
                    <img
                      src={friend.imgSrc ? avatar : friend.imgSrc}
                      alt={friend.name}
                      className='relative rounded-full h-20 w-20 mx-auto z-20'
                    />
                    <button className='chat-buton'>
                      <i data-feather='message-circle'></i>{' '}
                    </button>
                    <div
                      className='circle border h-10 w-10 border-gray-400/85 rounded-full absolute inset-0 m-auto group-hover:h-full group-hover:w-full z-10'
                      style={{ transition: 'all 0.3s ease' }}></div>
                  </div>
                </Link>
                <h3 className='font-montserrat mt-1.5 font-medium text-[.9rem]'>
                  {friend.name}
                </h3>
                <p className='text-sm text-gray-500'>{friend.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;
