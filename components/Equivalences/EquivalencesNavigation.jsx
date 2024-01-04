const tabs = [
    { name: 'View Details', key: 'view' },
    { name: 'Add Details', key: 'add' },
    { name: 'Mapping Details', key: 'mapping' },
    { name: 'View Mapping', key: 'view_mapping' },
];

const EquivalencesNavigation = ({ activeTab, setActiveTab }) => {
    return (
        <div className='equivalenciesNavigation'>
            {
                tabs.map((tabInfo) => (
                    <div
                        key={tabInfo.key}
                        onClick={() => setActiveTab(tabInfo.key)}
                        className={`${activeTab === tabInfo.key ? 'equivalenciesNavigationLink active' : 'equivalenciesNavigationLink'
                            }`}
                    >
                        {tabInfo.name}
                    </div>
                ))
            }
        </div>
    )
}

export default EquivalencesNavigation