import './menu-item.styles.scss'

const MenuItem = (props) => (
    
    <div className={`${props.size} menu-item`}>
                <div 
                    className='background-image'
                    style={{
                        backgroundImage: `url(${props.imageUrl})`
                    }}
                />
                <div className='content'>
                    <div className='title'> {props.title.toUpperCase()}</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
    </div>
)

export default MenuItem