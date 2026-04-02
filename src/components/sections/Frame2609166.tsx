import mockExamImage from '../../assets/image.png';

export default function Frame2609166() {
  return (
    <div
      style={{
        width: '1728px',
        height: '447px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '1002px',
          height: '447px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          gap: '24px',
          paddingTop: '24px',
          paddingBottom: '48px',
          paddingLeft: '246px',
          paddingRight: '56px',
          backgroundColor: 'rgba(246, 246, 246, 1)',
        }}
      >
        <svg style={{ width: '52px', height: '51px', opacity: '0.8999999761581421' }} width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.9143 51H26.9482L26.7016 46.7128L27.6508 45.8644C31.9417 46.3953 35.7838 46.8752 40.0686 47.4192L38.9832 43.5271C38.8086 42.8421 39.0548 42.0977 39.542 41.6809L52 30.6722L49.4179 29.3504C48.2863 28.9095 48.605 28.2189 49.0084 26.549L50.9068 19.0248L43.6775 20.6789C42.9685 20.7959 42.4996 20.3067 42.3965 19.8445L41.4605 16.3042L35.7401 23.2752C34.9272 24.3918 33.2821 24.3918 33.7955 21.8095L36.2396 7.68847L32.9625 9.53841C32.0395 10.0944 31.1235 10.1872 30.6013 9.1894L25.9996 0L21.396 9.18755C20.8835 10.1854 19.9605 10.0953 19.0428 9.53841L15.7656 7.68847L18.2115 21.8077C18.7179 24.3928 17.0728 24.3928 16.2599 23.2752L10.5395 16.3042L9.60871 19.8445C9.49781 20.3067 9.03763 20.7959 8.32772 20.6808L1.09237 19.0248L2.99071 26.5472C3.40025 28.2161 3.71896 28.9095 2.58729 29.3522L0 30.6722L12.458 41.679C12.9522 42.0949 13.2045 42.844 13.029 43.5271L11.9367 47.4192C16.2215 46.8762 20.0635 46.3981 24.3545 45.8644L25.3036 46.7128L24.8883 51H25.9152H25.9143Z"
            fill="#DB1010"
          />
        </svg>

        <div style={{ width: '638px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px' }}>
            <h1
              style={{
                alignSelf: 'stretch',
                width: '100%',
                maxWidth: '638px',
                color: 'rgba(55, 56, 55, 1)',
                fontSize: '36px',
                fontWeight: '600',
                textAlign: 'left',
                lineHeight: '120.00000476837158%',
                margin: 0,
              }}
            >
              What is a Mock Exam?
            </h1>
            <h3
              style={{
                alignSelf: 'stretch',
                width: '100%',
                maxWidth: '638px',
                color: 'rgba(83, 84, 83, 1)',
                fontSize: '18px',
                fontWeight: '300',
                textAlign: 'left',
                lineHeight: '139.9999976158142%',
                margin: 0,
              }}
            >
              A mock exam is a practice test that mirrors the real certification exam. It helps candidates understand the exam format, question types, and time constraints in advance.
            </h3>
          </div>
        </div>
      </div>
      <img src={mockExamImage} alt="Mock exam" style={{ width: '726px', height: '447px', objectFit: 'cover' }} />
    </div>
  );
}
