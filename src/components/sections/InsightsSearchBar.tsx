function Search2line() {
  return (
    <svg style={{ width: '24px', height: '24px', overflow: 'hidden' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_15598_2306)">
        <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" fill="#666766"/>
      </g>
      <defs>
        <clipPath id="clip0_15598_2306">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function TextField() {
  return (
    <div style={{ width: '444px', height: '57px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '4px' }}>
      <div style={{ alignSelf: 'stretch', width: '100%', height: '57px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '16px', paddingRight: '16px', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '12px', border: '1px solid rgba(217, 221, 226, 1)' }}>
        <Search2line />
        <input 
          type="text" 
          placeholder="Search" 
          style={{ 
            flex: '1 1 0', 
            border: 'none', 
            outline: 'none', 
            backgroundColor: 'transparent',
            color: 'rgba(149, 150, 149, 1)', 
            fontSize: '18px', 
            fontWeight: '300', 
            lineHeight: '139.9999976158142%',
            fontFamily: 'inherit'
          }} 
        />
      </div>
    </div>
  );
}

function SearchButton() {
  return (
    <button style={{ width: '44px', height: '44px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '12px', overflow: 'hidden', backgroundColor: 'rgba(39, 40, 39, 1)', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>
      <svg style={{ width: '20px', height: '20px', overflow: 'hidden' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_search_button)">
          <path d="M9.16602 1.66669C13.306 1.66669 16.666 5.02669 16.666 9.16669C16.666 13.3067 13.306 16.6667 9.16602 16.6667C5.02602 16.6667 1.66602 13.3067 1.66602 9.16669C1.66602 5.02669 5.02602 1.66669 9.16602 1.66669ZM9.16602 15C12.3885 15 14.9993 12.3892 14.9993 9.16669C14.9993 5.94335 12.3885 3.33335 9.16602 3.33335C5.94268 3.33335 3.33268 5.94335 3.33268 9.16669C3.33268 12.3892 5.94268 15 9.16602 15ZM16.2368 15.0592L18.5943 17.4159L17.4152 18.595L15.0585 16.2375L16.2368 15.0592Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_search_button">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default function InsightsSearchBar() {
  return (
    <div style={{ width: '1728px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '8px', paddingTop: '32px', paddingBottom: '32px' }}>
      <TextField />
      <SearchButton />
    </div>
  );
}
