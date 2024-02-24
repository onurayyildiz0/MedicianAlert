import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ScrollDetail } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  showDatePicker: boolean = false; // Takvim görüntülenip görüntülenmediğini kontrol etmek için bir değişken
  selectedDate: string | undefined; // Seçilen tarih değeri
  flag: number = 0;
  dayChange:number= -2;
  public datetime: any;
  public date = [
    { month: 'January', day: 1, value: 1, shortday:'Mon'},
    { month: 'January', day: 2, value: 1, shortday:'Tue'},
    { month: 'January', day: 3, value: 1, shortday:'Wed'},
    { month: 'January', day: 4, value: 1, shortday:'Thu'},
    { month: 'January', day: 5, value: 1, shortday:'Fri'},
    { month: 'January', day: 6, value: 1, shortday:'Sat'},
    { month: 'January', day: 7, value: 1, shortday:'Sun' },
    { month: 'January', day: 8, value: 1, shortday:'Mon' },
    { month: 'January', day: 9, value: 1, shortday:'Tue' },
    { month: 'January', day: 10, value: 1, shortday:'Wed' },
    { month: 'January', day: 11, value: 1, shortday:'Thu' },
    { month: 'January', day: 12, value: 1, shortday:'Fri' },
    { month: 'January', day: 13, value: 1, shortday:'Sat' },
    { month: 'January', day: 14, value: 1, shortday:'Sun' },
    { month: 'January', day: 15, value: 1, shortday:'Mon' },
    { month: 'January', day: 16, value: 1, shortday:'Tue' },
    { month: 'January', day: 17, value: 1, shortday:'Wed' },
    { month: 'January', day: 18, value: 1, shortday:'Thu' },
    { month: 'January', day: 19, value: 1, shortday:'Fri' },
    { month: 'January', day: 20, value: 1, shortday:'Sat' },
    { month: 'January', day: 21, value: 1, shortday:'Sun' },
    { month: 'January', day: 22, value: 1, shortday:'Mon' },
    { month: 'January', day: 23, value: 1, shortday:'Mon' },
    { month: 'January', day: 24, value: 1, shortday:'Mon' },
    { month: 'January', day: 25, value: 1, shortday:'Mon' },
    { month: 'January', day: 26, value: 1, shortday:'Mon' },
    { month: 'January', day: 27, value: 1, shortday:'Mon' },
    { month: 'January', day: 28, value: 1, shortday:'Mon' },
    { month: 'January', day: 29, value: 1, shortday:'Mon' },
    { month: 'January', day: 30, value: 1, shortday:'Mon' },
    { month: 'January', day: 31, value: 1, shortday:'Mon' },


    { month: 'February', day: 1, value: 2 },
    { month: 'February', day: 2, value: 2 },
    { month: 'February', day: 3, value: 2 },
    { month: 'February', day: 4, value: 2 },
    { month: 'February', day: 5, value: 2 },
    { month: 'February', day: 6, value: 2 },
    { month: 'February', day: 7, value: 2 },
    { month: 'February', day: 8, value: 2 },
    { month: 'February', day: 9, value: 2 },
    { month: 'February', day: 10, value: 2 },
    { month: 'February', day: 11, value: 2 },
    { month: 'February', day: 12, value: 2 },
    { month: 'February', day: 13, value: 2 },
    { month: 'February', day: 14, value: 2 },
    { month: 'February', day: 15, value: 2 },
    { month: 'February', day: 16, value: 2 },
    { month: 'February', day: 17, value: 2 },
    { month: 'February', day: 18, value: 2 },
    { month: 'February', day: 19, value: 2 },
    { month: 'February', day: 20, value: 2 },
    { month: 'February', day: 21, value: 2 },
    { month: 'February', day: 22, value: 2 },
    { month: 'February', day: 23, value: 2 },
    { month: 'February', day: 24, value: 2 },
    { month: 'February', day: 25, value: 2 },
    { month: 'February', day: 26, value: 2 },
    { month: 'February', day: 27, value: 2 },
    { month: 'February', day: 28, value: 2 },


    { month: 'March', day: 1, value: 3 },
    { month: 'March', day: 2, value: 3 },
    { month: 'March', day: 3, value: 3 },
    { month: 'March', day: 4, value: 3 },
    { month: 'March', day: 5, value: 3 },
    { month: 'March', day: 6, value: 3 },
    { month: 'March', day: 7, value: 3 },
    { month: 'March', day: 8, value: 3 },
    { month: 'March', day: 9, value: 3 },
    { month: 'March', day: 10, value: 3 },
    { month: 'March', day: 11, value: 3 },
    { month: 'March', day: 12, value: 3 },
    { month: 'March', day: 13, value: 3 },
    { month: 'March', day: 14, value: 3 },
    { month: 'March', day: 15, value: 3 },
    { month: 'March', day: 16, value: 3 },
    { month: 'March', day: 17, value: 3 },
    { month: 'March', day: 18, value: 3 },
    { month: 'March', day: 19, value: 3 },
    { month: 'March', day: 20, value: 3 },
    { month: 'March', day: 21, value: 3 },
    { month: 'March', day: 22, value: 3 },
    { month: 'March', day: 23, value: 3 },
    { month: 'March', day: 24, value: 3 },
    { month: 'March', day: 25, value: 3 },
    { month: 'March', day: 26, value: 3 },
    { month: 'March', day: 27, value: 3 },
    { month: 'March', day: 28, value: 3 },
    { month: 'March', day: 29, value: 3 },
    { month: 'March', day: 30, value: 3 },
    { month: 'March', day: 31, value: 3 },

    { month: 'April', day: 1, value: 4 },
    { month: 'April', day: 2, value: 4 },
    { month: 'April', day: 3, value: 4 },
    { month: 'April', day: 4, value: 4 },
    { month: 'April', day: 5, value: 4 },
    { month: 'April', day: 6, value: 4 },
    { month: 'April', day: 7, value: 4 },
    { month: 'April', day: 8, value: 4 },
    { month: 'April', day: 9, value: 4 },
    { month: 'April', day: 10, value: 4 },
    { month: 'April', day: 11, value: 4 },
    { month: 'April', day: 12, value: 4 },
    { month: 'April', day: 13, value: 4 },
    { month: 'April', day: 14, value: 4 },
    { month: 'April', day: 15, value: 4 },
    { month: 'April', day: 16, value: 4 },
    { month: 'April', day: 17, value: 4 },
    { month: 'April', day: 18, value: 4 },
    { month: 'April', day: 19, value: 4 },
    { month: 'April', day: 20, value: 4 },
    { month: 'April', day: 21, value: 4 },
    { month: 'April', day: 22, value: 4 },
    { month: 'April', day: 23, value: 4 },
    { month: 'April', day: 24, value: 4 },
    { month: 'April', day: 25, value: 4 },
    { month: 'April', day: 26, value: 4 },
    { month: 'April', day: 27, value: 4 },
    { month: 'April', day: 28, value: 4 },
    { month: 'April', day: 29, value: 4 },
    { month: 'April', day: 30, value: 4 },

    { month: 'May', day: 1, value: 5 },
    { month: 'May', day: 2, value: 5 },
    { month: 'May', day: 3, value: 5 },
    { month: 'May', day: 4, value: 5 },
    { month: 'May', day: 5, value: 5 },
    { month: 'May', day: 6, value: 5 },
    { month: 'May', day: 7, value: 5 },
    { month: 'May', day: 8, value: 5 },
    { month: 'May', day: 9, value: 5 },
    { month: 'May', day: 10, value: 5 },
    { month: 'May', day: 11, value: 5 },
    { month: 'May', day: 12, value: 5 },
    { month: 'May', day: 13, value: 5 },
    { month: 'May', day: 14, value: 5 },
    { month: 'May', day: 15, value: 5 },
    { month: 'May', day: 16, value: 5 },
    { month: 'May', day: 17, value: 5 },
    { month: 'May', day: 18, value: 5 },
    { month: 'May', day: 19, value: 5 },
    { month: 'May', day: 20, value: 5 },
    { month: 'May', day: 21, value: 5 },
    { month: 'May', day: 22, value: 5 },
    { month: 'May', day: 23, value: 5 },
    { month: 'May', day: 24, value: 5 },
    { month: 'May', day: 25, value: 5 },
    { month: 'May', day: 26, value: 5 },
    { month: 'May', day: 27, value: 5 },
    { month: 'May', day: 28, value: 5 },
    { month: 'May', day: 29, value: 5 },
    { month: 'May', day: 30, value: 5 },
    { month: 'May', day: 31, value: 5 },

    { month: 'June', day: 1, value: 6 },
    { month: 'June', day: 2, value: 6 },
    { month: 'June', day: 3, value: 6 },
    { month: 'June', day: 4, value: 6 },
    { month: 'June', day: 5, value: 6 },
    { month: 'June', day: 6, value: 6 },
    { month: 'June', day: 7, value: 6 },
    { month: 'June', day: 8, value: 6 },
    { month: 'June', day: 9, value: 6 },
    { month: 'June', day: 10, value: 6 },
    { month: 'June', day: 11, value: 6 },
    { month: 'June', day: 12, value: 6 },
    { month: 'June', day: 13, value: 6 },
    { month: 'June', day: 14, value: 6 },
    { month: 'June', day: 15, value: 6 },
    { month: 'June', day: 16, value: 6 },
    { month: 'June', day: 17, value: 6 },
    { month: 'June', day: 18, value: 6 },
    { month: 'June', day: 19, value: 6 },
    { month: 'June', day: 20, value: 6 },
    { month: 'June', day: 21, value: 6 },
    { month: 'June', day: 22, value: 6 },
    { month: 'June', day: 23, value: 6 },
    { month: 'June', day: 24, value: 6 },
    { month: 'June', day: 25, value: 6 },
    { month: 'June', day: 26, value: 6 },
    { month: 'June', day: 27, value: 6 },
    { month: 'June', day: 28, value: 6 },
    { month: 'June', day: 29, value: 6 },
    { month: 'June', day: 30, value: 6 },

    { month: 'July', day: 1, value: 7 },
    { month: 'July', day: 2, value: 7 },
    { month: 'July', day: 3, value: 7 },
    { month: 'July', day: 4, value: 7 },
    { month: 'July', day: 5, value: 7 },
    { month: 'July', day: 6, value: 7 },
    { month: 'July', day: 7, value: 7 },
    { month: 'July', day: 8, value: 7 },
    { month: 'July', day: 9, value: 7 },
    { month: 'July', day: 10, value: 7 },
    { month: 'July', day: 11, value: 7 },
    { month: 'July', day: 12, value: 7 },
    { month: 'July', day: 13, value: 7 },
    { month: 'July', day: 14, value: 7 },
    { month: 'July', day: 15, value: 7 },
    { month: 'July', day: 16, value: 7 },
    { month: 'July', day: 17, value: 7 },
    { month: 'July', day: 18, value: 7 },
    { month: 'July', day: 19, value: 7 },
    { month: 'July', day: 20, value: 7 },
    { month: 'July', day: 21, value: 7 },
    { month: 'July', day: 22, value: 7 },
    { month: 'July', day: 23, value: 7 },
    { month: 'July', day: 24, value: 7 },
    { month: 'July', day: 25, value: 7 },
    { month: 'July', day: 26, value: 7 },
    { month: 'July', day: 27, value: 7 },
    { month: 'July', day: 28, value: 7 },
    { month: 'July', day: 29, value: 7 },
    { month: 'July', day: 30, value: 7 },
    { month: 'July', day: 31, value: 7 },

    { month: 'August', day: 1, value: 8 },
    { month: 'August', day: 2, value: 8 },
    { month: 'August', day: 3, value: 8 },
    { month: 'August', day: 4, value: 8 },
    { month: 'August', day: 5, value: 8 },
    { month: 'August', day: 6, value: 8 },
    { month: 'August', day: 7, value: 8 },
    { month: 'August', day: 8, value: 8 },
    { month: 'August', day: 9, value: 8 },
    { month: 'August', day: 10, value: 8 },
    { month: 'August', day: 11, value: 8 },
    { month: 'August', day: 12, value: 8 },
    { month: 'August', day: 13, value: 8 },
    { month: 'August', day: 14, value: 8 },
    { month: 'August', day: 15, value: 8 },
    { month: 'August', day: 16, value: 8 },
    { month: 'August', day: 17, value: 8 },
    { month: 'August', day: 18, value: 8 },
    { month: 'August', day: 19, value: 8 },
    { month: 'August', day: 20, value: 8 },
    { month: 'August', day: 21, value: 8 },
    { month: 'August', day: 22, value: 8 },
    { month: 'August', day: 23, value: 8 },
    { month: 'August', day: 24, value: 8 },
    { month: 'August', day: 25, value: 8 },
    { month: 'August', day: 26, value: 8 },
    { month: 'August', day: 27, value: 8 },
    { month: 'August', day: 28, value: 8 },
    { month: 'August', day: 29, value: 8 },
    { month: 'August', day: 30, value: 8 },
    { month: 'August', day: 31, value: 8 },

    { month: 'September', day: 1, value: 9 },
    { month: 'September', day: 2, value: 9 },
    { month: 'September', day: 3, value: 9 },
    { month: 'September', day: 4, value: 9 },
    { month: 'September', day: 5, value: 9 },
    { month: 'September', day: 6, value: 9 },
    { month: 'September', day: 7, value: 9 },
    { month: 'September', day: 8, value: 9 },
    { month: 'September', day: 9, value: 9 },
    { month: 'September', day: 10, value: 9 },
    { month: 'September', day: 11, value: 9 },
    { month: 'September', day: 12, value: 9 },
    { month: 'September', day: 13, value: 9 },
    { month: 'September', day: 14, value: 9 },
    { month: 'September', day: 15, value: 9 },
    { month: 'September', day: 16, value: 9 },
    { month: 'September', day: 17, value: 9 },
    { month: 'September', day: 18, value: 9 },
    { month: 'September', day: 19, value: 9 },
    { month: 'September', day: 20, value: 9 },
    { month: 'September', day: 21, value: 9 },
    { month: 'September', day: 22, value: 9 },
    { month: 'September', day: 23, value: 9 },
    { month: 'September', day: 24, value: 9 },
    { month: 'September', day: 25, value: 9 },
    { month: 'September', day: 26, value: 9 },
    { month: 'September', day: 27, value: 9 },
    { month: 'September', day: 28, value: 9 },
    { month: 'September', day: 29, value: 9 },
    { month: 'September', day: 30, value: 9 },

    { month: 'October', day: 1, value: 10 },
    { month: 'October', day: 2, value: 10 },
    { month: 'October', day: 3, value: 10 },
    { month: 'October', day: 4, value: 10 },
    { month: 'October', day: 5, value: 10 },
    { month: 'October', day: 6, value: 10 },
    { month: 'October', day: 7, value: 10 },
    { month: 'October', day: 8, value: 10 },
    { month: 'October', day: 9, value: 10 },
    { month: 'October', day: 10, value: 10 },
    { month: 'October', day: 11, value: 10 },
    { month: 'October', day: 12, value: 10 },
    { month: 'October', day: 13, value: 10 },
    { month: 'October', day: 14, value: 10 },
    { month: 'October', day: 15, value: 10 },
    { month: 'October', day: 16, value: 10 },
    { month: 'October', day: 17, value: 10 },
    { month: 'October', day: 18, value: 10 },
    { month: 'October', day: 19, value: 10 },
    { month: 'October', day: 20, value: 10 },
    { month: 'October', day: 21, value: 10 },
    { month: 'October', day: 22, value: 10 },
    { month: 'October', day: 23, value: 10 },
    { month: 'October', day: 24, value: 10 },
    { month: 'October', day: 25, value: 10 },
    { month: 'October', day: 26, value: 10 },
    { month: 'October', day: 27, value: 10 },
    { month: 'October', day: 28, value: 10 },
    { month: 'October', day: 29, value: 10 },
    { month: 'October', day: 30, value: 10 },
    { month: 'October', day: 31, value: 10 },

    { month: 'November', day: 1, value: 11 },
    { month: 'November', day: 2, value: 11 },
    { month: 'November', day: 3, value: 11 },
    { month: 'November', day: 4, value: 11 },
    { month: 'November', day: 5, value: 11 },
    { month: 'November', day: 6, value: 11 },
    { month: 'November', day: 7, value: 11 },
    { month: 'November', day: 8, value: 11 },
    { month: 'November', day: 9, value: 11 },
    { month: 'November', day: 10, value: 11 },
    { month: 'November', day: 11, value: 11 },
    { month: 'November', day: 12, value: 11 },
    { month: 'November', day: 13, value: 11 },
    { month: 'November', day: 14, value: 11 },
    { month: 'November', day: 15, value: 11 },
    { month: 'November', day: 16, value: 11 },
    { month: 'November', day: 17, value: 11 },
    { month: 'November', day: 18, value: 11 },
    { month: 'November', day: 19, value: 11 },
    { month: 'November', day: 20, value: 11 },
    { month: 'November', day: 21, value: 11 },
    { month: 'November', day: 22, value: 11 },
    { month: 'November', day: 23, value: 11 },
    { month: 'November', day: 24, value: 11 },
    { month: 'November', day: 25, value: 11 },
    { month: 'November', day: 26, value: 11 },
    { month: 'November', day: 27, value: 11 },
    { month: 'November', day: 28, value: 11 },
    { month: 'November', day: 29, value: 11 },
    { month: 'November', day: 30, value: 11 },

    { month: 'December', day: 1, value: 12 },
    { month: 'December', day: 2, value: 12 },
    { month: 'December', day: 3, value: 12 },
    { month: 'December', day: 4, value: 12 },
    { month: 'December', day: 5, value: 12 },
    { month: 'December', day: 6, value: 12 },
    { month: 'December', day: 7, value: 12 },
    { month: 'December', day: 8, value: 12 },
    { month: 'December', day: 9, value: 12 },
    { month: 'December', day: 10, value: 12 },
    { month: 'December', day: 11, value: 12 },
    { month: 'December', day: 12, value: 12 },
    { month: 'December', day: 13, value: 12 },
    { month: 'December', day: 14, value: 12 },
    { month: 'December', day: 15, value: 12 },
    { month: 'December', day: 16, value: 12 },
    { month: 'December', day: 17, value: 12 },
    { month: 'December', day: 18, value: 12 },
    { month: 'December', day: 19, value: 12 },
    { month: 'December', day: 20, value: 12 },
    { month: 'December', day: 21, value: 12 },
    { month: 'December', day: 22, value: 12 },
    { month: 'December', day: 23, value: 12 },
    { month: 'December', day: 24, value: 12 },
    { month: 'December', day: 25, value: 12 },
    { month: 'December', day: 26, value: 12 },
    { month: 'December', day: 27, value: 12 },
    { month: 'December', day: 28, value: 12 },
    { month: 'December', day: 29, value: 12 },
    { month: 'December', day: 30, value: 12 },
    { month: 'December', day: 31, value: 12 },

  ];

  public medicinies =[
    { medicinies: 'Omeprazole', time: '18:50', value: 1, date:'10.02.2024',type:'pill.png'},
    { medicinies: 'Aspirin', time: '15:00', value: 1, date:'10.02.2024',type:'tablet.png'},
    { medicinies: 'Simvastatin', time: '14:00', value: 1, date:'10.02.2024',type:'pill.png'},
    { medicinies: 'Lisinopril', time: '09:30', value: 2, date:'13.02.2024',type:'tablet.png'},
    { medicinies: 'Ibuprofen', time: '22:00', value: 0, date:'16.02.2024',type:'pill.png'},
    { medicinies: 'Omeprazole', time: '20:00', value: 1, date:'14.02.2024',type:'tablet.png'},
    { medicinies: 'Prednisone', time: '13:50', value: 2, date:'20.02.2024',type:'tablet.png'},
    { medicinies: 'Atorvastatin', time: '17:30', value: 0, date:'14.02.2024',type:'pill.png'},
    { medicinies: 'Amoxicillin', time: '21:00', value: 2, date:'15.02.2024',type:'tablet.png'},
    { medicinies: 'Metformin', time: '12:12', value: 0, date:'16.02.2024',type:'pill.png'},
    { medicinies: 'Levothyroxine', time: '10:18', value: 1, date:'18.02.2024',type:'pill.png'},
    { medicinies: 'Clonazepam', time: '09:00', value: 2, date:'16.02.2024',type:'pill.png'},
    { medicinies: 'Fluoxetine', time: '10:18', value: 0, date:'16.02.2024',type:'pill.png'},
    { medicinies: 'Montelukast', time: '18:45', value: 0, date:'15.02.2024',type:'pill.png'},
    { medicinies: 'Losartan', time: '22:15', value: 1, date:'11.02.2024',type:'pill.png'},
    { medicinies: 'Amoxicillin', time: '07:20', value: 0, date:'13.02.2024',type:'pill.png'},
    { medicinies: 'Amlodipine', time: '12:45', value: 0, date:'12.02.2024',type:'pill.png'},
    { medicinies: 'Amoxicillin', time: '20:35', value: 1, date:'14.02.2024',type:'pill.png'},
    { medicinies: 'Ciprofloxacin', time:'23:55', value: 0, date:'18.02.2024',type:'pill.png'},
    { medicinies: 'Loratadine', time: '03:25', value: 1, date:'17.02.2024',type:'pill.png'},
    { medicinies: 'Duloxetine', time: '23:30', value: 1, date:'16.02.2024',type:'pill.png'},
    { medicinies: 'Rosuvastatin', time: '20:05', value: 1, date:'15.02.2024',type:'pill.png'},
    { medicinies: 'Escitalopram', time: '12:45', value: 2, date:'14.02.2024',type:'tablet.png'},
    { medicinies: 'Amoxicillin', time: '03:25', value: 1, date:'12.02.2024',type:'tablet.png'},
    { medicinies: 'Warfarin', time:'15:10', value: 1, date:'13.02.2024',type:'tablet.png'},
    { medicinies: 'Montelukast', time: '07:20', value: 1, date:'18.02.2024',type:'tablet.png'},

    { medicinies: 'Gabapentin', time: '03:15', value: 2, date:'01.02.2024',type:'tablet.png'},
    { medicinies: 'Amoxicillin', time: '03:15', value: 2, date:'03.02.2024',type:'tablet.png'},
    { medicinies: 'Warfarin', time: '20:05', value: 1, date:'11.02.2024',type:'tablet.png'},
  ]
  month: any;
  isActive: boolean=false;


  // Takvimı göstermek için kullanılan fonksiyon
  showCalendar() {
    if (this.flag == 0) {
      this.showDatePicker = true;
      this.flag = 1;
    }
    else {
      this.showDatePicker = false;
      this.flag = 0;
    }
  }
  constructor(private router: Router, private toastController: ToastController) { }

  getPage2() {
    this.router.navigate(['/', 'tabs', 'tab2']);

    
  }
  
  
  ngOnInit() {
    const date = new Date();
    if (date.getDate() + this.dayChange <= 0) {
      this.dayChange = -this.dayChange;
    }

    date.setDate(date.getDate() + this.dayChange);
    this.datetime = date.toISOString();
  }
  hasupdateorhasupdate2($selectedDate: any){
    if ($selectedDate) {
      const dateObject = new Date($selectedDate);
      const month = dateObject.getMonth() + 1;
      
  
    }
    if(this.month==this.date.values){
      return "has-update2";

    }
    else
    return "has-update"
}
  toggleButton(id : number) {
    for(const day of this.date){
    if(day.day===id){
      this.isActive = !this.isActive; 
  }
}
}

}