import React, { useState } from 'react';
import '../ilacgiris/ilacgiris.scss';
const İlacgiris = () => {
    const [medication, setMedication] = useState({
        dose: '',
        frequency: {
          days: [],
          time: ''
        }
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setMedication(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleDaysChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
          setMedication(prevState => ({
            ...prevState,
            frequency: {
              ...prevState.frequency,
              days: [...prevState.frequency.days, name]
            }
          }));
        } else {
          setMedication(prevState => ({
            ...prevState,
            frequency: {
              ...prevState.frequency,
              days: prevState.frequency.days.filter(day => day !== name)
            }
          }));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(medication);
        // Burada veriyi göndermek, depolamak veya başka bir işlem yapabilirsiniz.
      };

      return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                ilacın adını giriniz:
                <input type="text" name="name" onChange={handleChange} />
            </label>
            </div>
            <div>
          <label>
            İlaç Dozu:
            <input
              type="text"
              name="dose"
              value={medication.dose}
              onChange={handleChange}
            />
          </label>
          </div>
          <label>
            haftada kaç gün alıcaksınız:
            <div>
              <label>
                <input
                  type="checkbox"
                  name="Hergun"
                  checked={medication.frequency.days.includes('Monday')}
                  onChange={handleDaysChange}
                />
                hergün
              </label>
              <label>
                <input
                  type="checkbox"
                  name="İkiucgun"
                  checked={medication.frequency.days.includes('Tuesday')}
                  onChange={handleDaysChange}
                />
                2-3 gün
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Dortgun"
                  checked={medication.frequency.days.includes('Tuesday')}
                  onChange={handleDaysChange}
                />
                4 gün
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Besaltigun"
                  checked={medication.frequency.days.includes('Tuesday')}
                  onChange={handleDaysChange}
                />
                5-6 gün
              </label>
              {/* Diğer günler için aynı yapıyı tekrarlayabilirsiniz */}
            </div>
          </label>
          <div>
          <label>
            Saat:
            <input
              type="time"
              name="time"
              value={medication.frequency.time}
              onChange={handleChange}
            />
          </label>
          </div>
          <button type="submit">Kaydet</button>
        </form>
      );
    };


export default İlacgiris;