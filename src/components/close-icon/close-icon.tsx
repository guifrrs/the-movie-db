import Image from 'next/image'

export function CloseIcon() {
  return (
    <img
      src='data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 1.66667C5.39163 1.66667 1.66663 5.39167 1.66663 10C1.66663 14.6083 5.39163 18.3333 9.99996 18.3333C14.6083 18.3333 18.3333 14.6083 18.3333 10C18.3333 5.39167 14.6083 1.66667 9.99996 1.66667ZM14.1666 12.9917L12.9916 14.1667L9.99996 11.175L7.00829 14.1667L5.83329 12.9917L8.82496 10L5.83329 7.00834L7.00829 5.83334L9.99996 8.825L12.9916 5.83334L14.1666 7.00834L11.175 10L14.1666 12.9917Z" fill="white" /%3E%3C/svg%3E'
      alt="Close icon"
      width={20}
      height={20}
    />
  )
}
