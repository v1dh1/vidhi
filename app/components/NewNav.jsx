// NavBar.js
import Link from 'next/link';


const NewNav = () => {
  return (
    <div className="fixed inset-x-0 bottom-10 mx-auto text-white py-2 flex justify-center space-x-4 rounded-full drop-shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 bg-stone-800 border border-stone-200 z-50 sm:w-1/3 md:w-1/2 lg:w-1/3">
      {/* Button 1: Home */}
      <Link href="/home">
      <button className='flex flex-col items-center justify-center text-stone-200 py-2 px-4 rounded hover:bg-stone-950 hover:rounded-3xl'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8004 16.7998C20.5796 16.7998 20.4004 16.979 20.4004 17.1998V17.9998C20.4004 18.2206 20.5796 18.3998 20.8004 18.3998C21.0212 18.3998 21.2004 18.2206 21.2004 17.9998V17.1998C21.2004 16.979 21.0212 16.7998 20.8004 16.7998Z" fill="#F6F6F5"/>
        <path d="M9.82108 7.158C10.0187 7.25681 10.2587 7.17642 10.3579 6.9788L11.5999 4.49437V6.79997C11.5999 7.02075 11.7791 7.19995 11.9999 7.19995C12.2207 7.19995 12.3999 7.02075 12.3999 6.79997V4.49442L13.6419 6.97884C13.7123 7.11923 13.8535 7.20005 14.0003 7.20005C14.0603 7.20005 14.1215 7.18645 14.1787 7.15805C14.3763 7.05886 14.4567 6.81886 14.3579 6.62123L12.3999 2.70563V0.800016H14.3999V1.60003H13.1999C12.9791 1.60003 12.7999 1.77923 12.7999 2.00002C12.7999 2.2208 12.9791 2.4 13.1999 2.4H14.7999C15.0206 2.4 15.1998 2.2208 15.1998 2.00002V0.399984C15.1998 0.179203 15.0206 0 14.7999 0H11.9999C11.7791 0 11.5999 0.179203 11.5999 0.399984V2.70558L9.64187 6.62119C9.54306 6.81881 9.62345 7.05881 9.82108 7.158Z" fill="#F6F6F5"/>
        <path d="M13.9998 12.8C14.2206 12.8 14.3998 12.6207 14.3998 12.4V8.79997H14.7998C15.0205 8.79997 15.1997 8.62077 15.1997 8.39998C15.1997 8.1792 15.0205 8 14.7998 8H9.19979C8.97901 8 8.7998 8.1792 8.7998 8.39998C8.7998 8.62077 8.97901 8.79997 9.19979 8.79997H9.59977V12.4C9.59977 12.6207 9.77898 12.8 9.99976 12.8C10.2205 12.8 10.3997 12.6207 10.3997 12.4V8.79997H13.5998V12.4C13.5998 12.6207 13.779 12.8 13.9998 12.8Z" fill="#F6F6F5"/>
        <path d="M11.5996 10.7999V11.5999C11.5996 11.8207 11.7788 11.9999 11.9996 11.9999C12.2204 11.9999 12.3996 11.8207 12.3996 11.5999V10.7999C12.3996 10.5791 12.2204 10.3999 11.9996 10.3999C11.7788 10.3999 11.5996 10.5791 11.5996 10.7999Z" fill="#F6F6F5"/>
        <path d="M17.9996 12.0002H18.3996V12.4001C18.3996 12.6209 18.5788 12.8001 18.7996 12.8001C19.0203 12.8001 19.1995 12.6209 19.1995 12.4001V12.0002H22.3996V20.0002C22.3996 20.221 22.5788 20.4002 22.7995 20.4002C23.0203 20.4002 23.1995 20.221 23.1995 20.0002V12.0002H23.5995C23.8203 12.0002 23.9995 11.821 23.9995 11.6002C23.9995 11.3794 23.8203 11.2002 23.5995 11.2002H17.9996C17.7788 11.2002 17.5996 11.3794 17.5996 11.6002C17.5996 11.821 17.7788 12.0002 17.9996 12.0002Z" fill="#F6F6F5"/>
        <path d="M19.1998 3.99976C19.1998 4.22054 19.379 4.39974 19.5998 4.39974C19.8206 4.39974 19.9998 4.22054 19.9998 3.99976C20.2205 3.99976 20.3997 3.82055 20.3997 3.59977C20.3997 3.37899 20.2205 3.19979 19.9998 3.19979C19.9998 2.97901 19.8206 2.7998 19.5998 2.7998C19.379 2.7998 19.1998 2.97901 19.1998 3.19979C18.979 3.19979 18.7998 3.37899 18.7998 3.59977C18.7998 3.82055 18.979 3.99976 19.1998 3.99976Z" fill="#F6F6F5"/>
        <path d="M18.6209 10.3581C18.8189 10.4569 19.0589 10.3761 19.1577 10.1789L20.3997 7.69447V10.0001C20.3997 10.2208 20.5789 10.4001 20.7997 10.4001C21.0204 10.4001 21.1996 10.2208 21.1996 10.0001V7.69447L22.4416 10.1789C22.512 10.3193 22.6532 10.4001 22.8 10.4001C22.86 10.4001 22.9213 10.3865 22.9784 10.3581C23.1761 10.2589 23.2565 10.0189 23.1577 9.82128L21.1576 5.8213C21.1404 5.78652 21.1177 5.75689 21.0916 5.7313C21.0188 5.65171 20.916 5.6001 20.7997 5.6001C20.6833 5.6001 20.5805 5.65171 20.5077 5.7313C20.4817 5.75689 20.4589 5.78652 20.4417 5.8213L18.4417 9.82128C18.3429 10.0189 18.4233 10.2589 18.6209 10.3581Z" fill="#F6F6F5"/>
        <path d="M11.9996 17.6001C10.676 17.6001 9.59961 18.6765 9.59961 20.0001V23.6001C9.59961 23.8209 9.77881 24.0001 9.99959 24.0001H13.9996C14.2204 24.0001 14.3996 23.8209 14.3996 23.6001V20.0001C14.3996 18.6765 13.3232 17.6001 11.9996 17.6001ZM13.5996 23.2001H10.3996V22.4001H13.5996V23.2001ZM13.5996 21.6001H10.3996V20.8001H13.5996V21.6001ZM10.3996 20.0001C10.3996 19.1177 11.1172 18.4001 11.9996 18.4001C12.882 18.4001 13.5996 19.1177 13.5996 20.0001H10.3996Z" fill="#F6F6F5"/>
        <path d="M21.2004 14.0001C21.2004 13.7793 21.0212 13.6001 20.8004 13.6001C20.5796 13.6001 20.4004 13.7793 20.4004 14.0001V14.8001C20.4004 15.0209 20.5796 15.2001 20.8004 15.2001C21.0212 15.2001 21.2004 15.0209 21.2004 14.8001V14.0001Z" fill="#F6F6F5"/>
        <path d="M7.99959 1.19995C7.99959 1.42073 8.1788 1.59994 8.39958 1.59994C8.62036 1.59994 8.79956 1.42073 8.79956 1.19995C9.02034 1.19995 9.19955 1.02075 9.19955 0.799969C9.19955 0.579187 9.02034 0.399984 8.79956 0.399984C8.79956 0.179203 8.62036 0 8.39958 0C8.1788 0 7.99959 0.179203 7.99959 0.399984C7.77881 0.399984 7.59961 0.579187 7.59961 0.799969C7.59961 1.02075 7.77877 1.19995 7.99959 1.19995Z" fill="#F6F6F5"/>
        <path d="M3.19979 16.7998C2.97901 16.7998 2.7998 16.979 2.7998 17.1998V17.9998C2.7998 18.2206 2.97901 18.3998 3.19979 18.3998C3.42057 18.3998 3.59977 18.2206 3.59977 17.9998V17.1998C3.59977 16.979 3.42057 16.7998 3.19979 16.7998Z" fill="#F6F6F5"/>
        <path d="M8.00002 21.2002C7.85442 21.2002 7.71759 21.2394 7.60003 21.3078C7.36444 21.171 7.03561 21.171 6.80002 21.3078C6.56442 21.171 6.23559 21.171 6 21.3078C5.76441 21.171 5.43558 21.171 5.19998 21.3078C4.96439 21.171 4.63556 21.171 4.39997 21.3078C4.16437 21.171 3.83555 21.171 3.59995 21.3078C3.36436 21.171 3.03553 21.171 2.79994 21.3078C2.56434 21.171 2.23552 21.171 1.99992 21.3078C1.76433 21.171 1.4355 21.171 1.19991 21.3078C1.0823 21.2394 0.945516 21.2002 0.799922 21.2002C0.358781 21.2002 0 21.559 0 22.0002V23.6001C0 23.821 0.179203 24.0002 0.399984 24.0002H8.4C8.62078 24.0002 8.79998 23.821 8.79998 23.6002V22.0002C8.79998 21.559 8.4412 21.2002 8.00002 21.2002ZM8.00002 23.2002H0.800016V22.0002C0.800016 22.2209 0.979219 22.4001 1.2 22.4001C1.42078 22.4001 1.59998 22.2209 1.59998 22.0002C1.59998 22.2209 1.77919 22.4001 1.99997 22.4001C2.22075 22.4001 2.39995 22.2209 2.39995 22.0002C2.39995 22.2209 2.57916 22.4001 2.79994 22.4001C3.02072 22.4001 3.19992 22.2209 3.19992 22.0002C3.19992 22.2209 3.37912 22.4001 3.59991 22.4001C3.82069 22.4001 3.99989 22.2209 3.99989 22.0002C3.99989 22.2209 4.17909 22.4001 4.39987 22.4001C4.62066 22.4001 4.79986 22.2209 4.79986 22.0002C4.79986 22.2209 4.97906 22.4001 5.19984 22.4001C5.42062 22.4001 5.59983 22.2209 5.59983 22.0002C5.59983 22.2209 5.77903 22.4001 5.99981 22.4001C6.22059 22.4001 6.3998 22.2209 6.3998 22.0002C6.3998 22.2209 6.579 22.4001 6.79978 22.4001C7.02056 22.4001 7.19977 22.2209 7.19977 22.0002C7.19977 22.2209 7.37897 22.4001 7.59975 22.4001C7.82053 22.4001 7.99973 22.2209 7.99973 22.0002V23.2002H8.00002Z" fill="#F6F6F5"/>
        <path d="M23.2003 21.2002C23.0547 21.2002 22.9179 21.2394 22.8003 21.3078C22.5647 21.171 22.2359 21.171 22.0003 21.3078C21.7647 21.171 21.4359 21.171 21.2003 21.3078C20.9647 21.171 20.6359 21.171 20.4003 21.3078C20.1647 21.171 19.8359 21.171 19.6003 21.3078C19.3647 21.171 19.0358 21.171 18.8002 21.3078C18.5646 21.171 18.2358 21.171 18.0002 21.3078C17.7646 21.171 17.4358 21.171 17.2002 21.3078C16.9646 21.171 16.6358 21.171 16.4002 21.3078C16.2826 21.2394 16.1458 21.2002 16.0002 21.2002C15.559 21.2002 15.2002 21.559 15.2002 22.0002V23.6002C15.2002 23.821 15.3794 24.0002 15.6002 24.0002H23.6002C23.821 24.0002 24.0002 23.821 24.0002 23.6002V22.0002C24.0003 21.559 23.6415 21.2002 23.2003 21.2002ZM23.2003 23.2002H16.0003V22.0002C16.0003 22.2209 16.1795 22.4001 16.4003 22.4001C16.6211 22.4001 16.8003 22.2209 16.8003 22.0002C16.8003 22.2209 16.9795 22.4001 17.2003 22.4001C17.421 22.4001 17.6002 22.2209 17.6002 22.0002C17.6002 22.2209 17.7794 22.4001 18.0002 22.4001C18.221 22.4001 18.4002 22.2209 18.4002 22.0002C18.4002 22.2209 18.5794 22.4001 18.8002 22.4001C19.021 22.4001 19.2002 22.2209 19.2002 22.0002C19.2002 22.2209 19.3794 22.4001 19.6002 22.4001C19.8209 22.4001 20.0001 22.2209 20.0001 22.0002C20.0001 22.2209 20.1794 22.4001 20.4001 22.4001C20.6209 22.4001 20.8001 22.2209 20.8001 22.0002C20.8001 22.2209 20.9793 22.4001 21.2001 22.4001C21.4209 22.4001 21.6001 22.2209 21.6001 22.0002C21.6001 22.2209 21.7793 22.4001 22.0001 22.4001C22.2209 22.4001 22.4001 22.2209 22.4001 22.0002C22.4001 22.2209 22.5793 22.4001 22.8 22.4001C23.0208 22.4001 23.2 22.2209 23.2 22.0002V23.2002H23.2003Z" fill="#F6F6F5"/>
        <path d="M1.02127 10.3581C1.21927 10.4569 1.4589 10.3761 1.55809 10.1789L2.80009 7.69447V10.0001C2.80009 10.2208 2.97929 10.4001 3.20007 10.4001C3.42085 10.4001 3.60005 10.2208 3.60005 10.0001V7.69447L4.84205 10.1789C4.91246 10.3193 5.05365 10.4001 5.20046 10.4001C5.26046 10.4001 5.32168 10.3865 5.37887 10.3581C5.57645 10.2589 5.65688 10.0189 5.55807 9.82128L3.55805 5.8213C3.54085 5.78652 3.51807 5.75689 3.49205 5.7313C3.41926 5.65171 3.31646 5.6001 3.20007 5.6001C3.08368 5.6001 2.98088 5.65171 2.90809 5.7313C2.88207 5.75689 2.85929 5.78652 2.84209 5.8213L0.84207 9.82128C0.743258 10.0189 0.823648 10.2589 1.02127 10.3581Z" fill="#F6F6F5"/>
        <path d="M17.5998 15.6001V14.4001H18.3998V20.0001C18.3998 20.2209 18.579 20.4001 18.7998 20.4001C19.0206 20.4001 19.1998 20.2209 19.1998 20.0001V14.0001C19.1998 13.7793 19.0206 13.6001 18.7998 13.6001H17.1998C16.979 13.6001 16.7998 13.7793 16.7998 14.0001V15.2001H15.1998V14.0001C15.1998 13.7793 15.0206 13.6001 14.7998 13.6001H13.1998C12.979 13.6001 12.7998 13.7793 12.7998 14.0001V15.2001H11.1998V14.0001C11.1998 13.7793 11.0206 13.6001 10.7998 13.6001H9.19982C8.97904 13.6001 8.79984 13.7793 8.79984 14.0001V15.2001H7.19976V14.0001C7.19976 13.7793 7.02055 13.6001 6.79977 13.6001H5.19979C4.97901 13.6001 4.7998 13.7793 4.7998 14.0001V20.0001C4.7998 20.2209 4.97901 20.4001 5.19979 20.4001C5.42057 20.4001 5.59977 20.2209 5.59977 20.0001V14.4001H6.39979V15.6001C6.39979 15.8208 6.57899 16.0001 6.79977 16.0001H9.19977C9.42055 16.0001 9.59976 15.8208 9.59976 15.6001V14.4001H10.3998V15.6001C10.3998 15.8208 10.579 16.0001 10.7998 16.0001H13.1998C13.4205 16.0001 13.5997 15.8208 13.5997 15.6001V14.4001H14.3998V15.6001C14.3998 15.8208 14.579 16.0001 14.7997 16.0001H17.1997C17.4206 16.0001 17.5998 15.8208 17.5998 15.6001Z" fill="#F6F6F5"/>
        <path d="M0.399984 2.39979H0.799969V2.79977C0.799969 3.02055 0.979172 3.19976 1.19995 3.19976C1.42073 3.19976 1.59994 3.02055 1.59994 2.79977V2.39979H1.99992C2.2207 2.39979 2.39991 2.22059 2.39991 1.9998C2.39991 1.77902 2.2207 1.59982 1.99992 1.59982H1.59994V1.19979C1.59994 0.979008 1.42073 0.799805 1.19995 0.799805C0.979172 0.799805 0.799969 0.979008 0.799969 1.19979V1.59977H0.399984C0.179203 1.59977 0 1.77898 0 1.9998C0 2.22059 0.179203 2.39979 0.399984 2.39979Z" fill="#F6F6F5"/>
        <path d="M0.399984 12.0002H0.799969V20.4002C0.799969 20.6209 0.979172 20.8001 1.19995 20.8001C1.42073 20.8001 1.59994 20.6209 1.59994 20.4002V12.0002H4.8V12.4001C4.8 12.6209 4.9792 12.8001 5.19998 12.8001C5.42077 12.8001 5.59997 12.6209 5.59997 12.4001V12.0002H6C6.22078 12.0002 6.39998 11.821 6.39998 11.6002C6.39998 11.3794 6.22078 11.2002 6 11.2002H0.399984C0.179203 11.2002 0 11.3794 0 11.6002C0 11.821 0.179203 12.0002 0.399984 12.0002Z" fill="#F6F6F5"/>
        <path d="M3.59977 14.0001C3.59977 13.7793 3.42057 13.6001 3.19979 13.6001C2.97901 13.6001 2.7998 13.7793 2.7998 14.0001V14.8001C2.7998 15.0209 2.97901 15.2001 3.19979 15.2001C3.42057 15.2001 3.59977 15.0209 3.59977 14.8001V14.0001Z" fill="#F6F6F5"/>
      </svg>





        Home
      </button>
      </Link>

      {/* Button 2: Active/About */}
      <Link href="/about">
      <button className="flex flex-col items-center justify-center text-stone-200 py-2 px-4 rounded hover:bg-stone-950 hover:rounded-3xl">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_127_33)">
          <path d="M1.71387 22.7117C2.696 21.7061 2.72281 20.2297 2.75372 18.5265C2.80213 15.8598 2.8606 12.6378 6.61283 9.79883H17.539C21.2913 12.6378 21.3515 15.8598 21.3998 18.5265C21.4307 20.2297 21.4576 21.7061 22.4396 22.7117" stroke="#F6F6F5" strokeWidth="1.71415" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.752 9.79923H6.40127L4.98242 2.70498L8.52954 4.83326L12.0767 1.28613L15.6238 4.83326L19.171 2.70498L17.752 9.79923Z" stroke="#F6F6F5" strokeWidth="1.71415" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.3291 17.3926C17.4103 17.9703 17.321 18.5877 17.1465 19.1822C16.529 21.2872 14.2708 22.2603 12.0771 22.2603C9.88341 22.2603 7.62528 21.2872 7.0077 19.1822C6.83332 18.5877 6.74397 17.9703 6.82522 17.3926C6.93465 16.6144 7.15824 15.8711 7.44714 15.174C9.20678 14.9086 10.8703 14.0689 12.0771 13.0347C13.284 14.0689 14.9475 14.9086 16.7071 15.174C16.996 15.8711 17.2195 16.6144 17.3291 17.3926Z" stroke="#F6F6F5" strokeWidth="1.71415" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_127_33">
            <rect width="23.998" height="23.998" fill="white"/>
          </clipPath>
        </defs>
      </svg>


        About
      </button>
      </Link>

      {/* Button 3: Another Page */}
      <a>
      <button className='flex flex-col items-center justify-center text-stone-200 py-2 px-4 rounded hover:bg-stone-950 hover:rounded-3xl'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_127_34)">
          <path d="M9.88297 14.1211L1.49414 22.5099" stroke="#F6F6F5" stroke-width="1.71415" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.2258 3.07989C20.0855 2.27753 21.9656 4.07243 21.1538 5.928C20.6973 6.97172 20.1424 7.99788 19.3801 9.2345C20.4415 10.2746 21.2683 11.1397 22.0348 12.0335C23.3595 13.5782 22.1925 15.9018 20.1726 15.6554C19.2821 15.5468 18.3667 15.3796 17.3029 15.1376C16.9139 15.0492 16.5127 15.235 16.3305 15.5898C15.6597 16.8962 15.0607 17.9471 14.399 18.9657C13.3063 20.6478 10.7722 20.2414 10.3942 18.2715C10.1562 17.0313 10.041 15.7528 9.99892 14.1173C8.407 14.0515 7.1518 13.9235 5.92814 13.689C3.9436 13.3087 3.49456 10.7537 5.19035 9.65498C6.176 9.01634 7.21412 8.43116 8.51242 7.78317C8.874 7.6027 9.06477 7.19643 8.97409 6.80262C8.7199 5.69866 8.5462 4.75279 8.43691 3.82326C8.20224 1.82755 10.4856 0.665652 12.0121 1.97245C12.9267 2.75539 13.8098 3.61393 14.8817 4.73615C16.1434 4.04778 17.1819 3.53037 18.2258 3.07989Z" stroke="#F6F6F5" stroke-width="1.71415" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_127_34">
          <rect width="23.998" height="23.998" fill="white"/>
          </clipPath>
          </defs>
        </svg>

        Resume
      </button>
      </a>
    </div>
  );
};

export default NewNav;