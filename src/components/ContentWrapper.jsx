import MainContent from './MainContent';
import Sidebar from './Sidebar';

const ContentWrapper = () => {
  return (
    <div className="content">
        <div className="container">
          <div className="row">
            <MainContent />
            <Sidebar />
          </div>
        </div>
      </div>
  )
}

export default ContentWrapper
