'use client'

import { useState } from 'react';
import { Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AccessTimeFilled, AccountBalance, School, WorkspacePremium, Gavel, LocalLibrary } from "@mui/icons-material";
import './Courses.css'


const mediacontent = { display: 'flex', gap: '4%', margin: '0.5rem 0.8rem' }


const Course5 = () => {
    const [activePage, setActivePage] = useState('page1')

    const handlePageClick = (page) => {
        setActivePage(page)
    }

    return (
        <>

            <Typography className='course-title' variant="h3">Lorem ipsum dolor sit.  Course5</Typography>
            <div className="courses">
                <div className="course">
                    <div className="coursenavbar">
                        <button onClick={() => handlePageClick('page1')} className={activePage === 'page1' ? 'active' : ''}>Sobre este programa</button>
                        <button onClick={() => handlePageClick('page2')} className={activePage === 'page2' ? 'active' : ''}>Plan de estudios </button>
                        <button onClick={() => handlePageClick('page3')} className={activePage === 'page3' ? 'active' : ''}>Admision y financiacion</button>
                    </div>
                    <div className="content">
                        <div className="page1-content" style={{ display: activePage === 'page1' ? 'block' : 'none' }}>
                            <br></br>
                            <Typography variant="h5">Lorem ipsum dolor sit.</Typography>
                            <div style={{ margin: '1rem 2rem' }}>
                                <ul>
                                    <li>• Lorem ipsum dolor.</li>
                                    <li>• Lorem ipsum dolor sit.</li>
                                    <li>• Lorem ipsum dolor.</li>
                                    <li>• Lorem ipsum dolor sit.</li>
                                </ul>
                            </div>

                            <br></br>
                            <Typography variant="h5">Lorem ipsum dolor sit.</Typography>
                            <div style={{ margin: '1rem 2rem' }}>
                                <ul>
                                    <li>• Lorem ipsum dolor.</li>
                                    <li>• Lorem ipsum dolor sit.</li>
                                    <li>• Lorem ipsum dolor.</li>
                                    <li>• Lorem ipsum dolor sit.</li>
                                    <li>• Lorem ipsum dolor sit.</li>
                                    <li>• Lorem ipsum dolor sit.</li>
                                </ul>
                            </div>

                            <br></br>
                            <Typography variant="h5">Lorem ipsum dolor sit.</Typography>
                            <div style={{ margin: '1rem 2rem' }}>
                                <ul>
                                    <li>• Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores!.</li>
                                    <li>• Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, similique. Ut, quaerat?.</li>
                                    <li>• Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum! Quas..</li>
                                    <li>• Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur..</li>
                                    <li>• Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error expedita fugit officia rem..</li>
                                    <li>• Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur..</li>
                                </ul>
                            </div>
                        </div>
                        <div className="page2-content" style={{ display: activePage === 'page2' ? 'block' : 'none' }}>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rem at hic nesciunt recusandae quia officiis, iure, animi eveniet mollitia ad adipisci cum! Expedita molestias unde vero repudiandae nobis animi aliquid possimus aperiam sunt neque reprehenderit obcaecati ab, officiis itaque. Officiis quos et, excepturi harum nulla non consectetur vero voluptates earum quasi doloremque illo necessitatibus corporis fugit aspernatur molestiae debitis ea repudiandae cum. Eveniet vel, suscipit, tenetur quis exercitationem quisquam nam qui, molestias dolorum officiis consectetur? Nesciunt debitis, quo qui ullam obcaecati animi eos accusamus quas soluta vero eum, quibusdam at atque incidunt magnam in perferendis sed necessitatibus reprehenderit ab reiciendis, omnis error voluptate. Odio eligendi natus veniam eius maiores, cum, aliquam soluta harum voluptates mollitia ex. Magni obcaecati laudantium debitis quis corporis, ut eligendi quidem sed repellat voluptas repellendus voluptatum ex, dolore in tempore totam pariatur officiis eos explicabo, necessitatibus veniam dolorum? Exercitationem voluptate, obcaecati porro molestias sit tempora beatae perspiciatis nihil modi quae architecto quasi vero ab aperiam. Porro molestias itaque provident repudiandae qui, ratione beatae consectetur, ullam alias commodi cupiditate dolores odio id vero magnam. Ut illo doloremque commodi odit? Quis, perferendis rerum debitis tenetur unde nostrum a veritatis assumenda ex, maiores exercitationem, quidem vitae eligendi. Modi illum cumque perspiciatis nostrum esse, nihil distinctio dolores voluptatibus quisquam quam cum molestiae architecto ab sint quo magni saepe quasi. Hic exercitationem magni quis assumenda vero dolor, expedita eos reprehenderit saepe! Eaque nesciunt labore molestias adipisci beatae, nemo quidem quaerat. Commodi rerum inventore quod totam corporis, possimus amet ab vero facilis veniam, culpa perspiciatis unde esse blanditiis beatae labore sunt laboriosam officia? Laborum provident, molestiae recusandae, vero rem temporibus reprehenderit debitis veritatis autem vel eum saepe repellendus eos harum quas laudantium odio neque corrupti, mollitia voluptate voluptatibus nobis? Dolores repellat delectus nulla ducimus iste corporis iure laborum porro soluta ipsam.</p>
                            <br></br>
                        </div>
                        <div className="page3-content" style={{ display: activePage === 'page3' ? 'block' : 'none' }}>
                            <br></br>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quaerat reprehenderit, nobis eligendi illum nemo aspernatur magni quisquam eos vitae aliquid harum nisi maiores quibusdam illo dolores nesciunt consectetur expedita recusandae, unde accusantium iusto accusamus! Libero ad perspiciatis aspernatur quae, delectus dolorum unde? Officia tempora facilis, praesentium, maxime nulla magnam quasi dignissimos reiciendis, sed velit pariatur ullam odio dicta eum ex eaque. Laborum quaerat quam, dolorem laboriosam magnam sequi reprehenderit molestiae natus suscipit error nulla molestias cumque harum rem vitae beatae explicabo provident quo, aut ratione expedita. Optio temporibus nostrum voluptatibus iusto magni tempore, fugiat fuga nihil sapiente, at eos.</p>
                            <br></br>
                        </div>
                    </div>
                </div>


                <div className='course-card'>
                    <Card sx={{ maxWidth: 345, }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/assets/home/course-2.jpg"
                        />
                        <CardContent>
                            <div style={mediacontent}>
                                <AccessTimeFilled />
                                <Typography variant="h7" component="div">
                                    <b>Duracion:</b>  4 anos
                                </Typography>
                            </div>
                            <div style={mediacontent}>
                                <AccountBalance />
                                <Typography variant="h7" component="div">
                                    <b>Modalidad:</b>  Presencial
                                </Typography>
                            </div>
                            <div style={mediacontent}>
                                <School />
                                <Typography variant="h7" component="div">
                                    <b>Titulo:</b>  Lorem ipsum dolor sit amet.
                                </Typography>
                            </div>
                            <div style={mediacontent}>
                                <WorkspacePremium />
                                <Typography variant="h7" component="div">
                                    <b>Titulo Complementario:</b>  Certificado
                                </Typography>
                            </div>
                            <div style={mediacontent}>
                                <Gavel />
                                <Typography variant="h7" component="div">
                                    <b>Resolucion Ministerial:</b>  R.M./1373/2021.
                                </Typography>
                            </div>
                            <div style={mediacontent}>
                                <LocalLibrary />
                                <Typography variant="h7" component="div">
                                    <b>Fecha de incio:</b>  2023
                                </Typography>
                            </div>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Course5;