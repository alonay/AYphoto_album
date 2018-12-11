import React from 'react';
import { Image, Transformation, } from 'cloudinary-react';

const transformations = [
    [{ crop: 'limit', width: '500', height: '500', radius: '10' }],
    [{ crop: 'limit', width: '500', height: '500', effect: 'tint:50:red' }],
    [{ crop: 'limit', width: '500', height: '500', effect: 'gradient_fade' }],
    [{ crop: 'limit', width: '500', height: '500', border: '2px_solid_black' }],
    [{
        crop: 'limit',
        effect: 'sepia',
        gravity: 'north',
        width: '500',
        height: '500',
        radius: '20',
    },
        { angle: '20' },
    ],
    [{ crop: 'limit', width: '500', height: '500', effect: 'saturation:50' }],
    [{
      crop: 'limit',
      width: '500',
      height: '400',
      opacity: '60',
      overlay: 'cloudinary-icon',
      effect: 'colorize',
      color: 'white'
    }],
  ];

const PhotoThumbnails = ({ publicId }) => (
  <div className="thethumbnailholder">
    <table className="thumbnails">
        <tr>
            {transformations.map(transformation => {
                return (
                    <td>
                        <div className="thumbnail_holder">
                            <Image
                                publicId={publicId}
                                className="thumbnail inline"
                                format="jpg"
                            >

                                {transformation.map(
                                    (subTransformation, index) => {
                                        return (
                                            <Transformation
                                                {...subTransformation}
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                            </Image>
                        </div>
                        <table class="info">
                            {transformation.map(subTransformation => {
                                return Object.keys(subTransformation).map(
                                    prop => {
                                        return (
                                            <tr>
                                                <td>{prop}</td>
                                                <td>
                                                    {subTransformation[prop]}
                                                </td>
                                            </tr>
                                        );
                                    }
                                );
                            })}
                        </table>
                        <br />
                    </td>
                );
            })}
        </tr>
    </table>
  </div>
);

export default PhotoThumbnails;
