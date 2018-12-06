import React from 'react';
import './dashboard.css';

export default function dashboard(props) {
    return(
        <div>
            <h2>Welcome Jane Doe</h2>
            <button>Create New Project</button>
            <div>
                <h3>Projects</h3>
                <ul>
                    <li><button>FJ1000BZL</button></li>
                    <li><button>HELKON110</button></li>
                    <li><button>EZ7003W</button></li>
                    <li><button>EZ460EQ</button></li>
                </ul>
            </div>
        </div>
    )
}
