//
//  ContentView.swift
//  AceAI
//
//  Created by Rachel Yao on 10/25/19.
//  Copyright © 2019 GoingForGold. All rights reserved.
//
//
//import SwiftUI
//
//struct ContentView: View {
//    @State private var showImagePicker: Bool = false
//    @State private var image: Image? = nil
//    var body: some View {
//        Text("Ace AI")
//        VStack{
//
//            image?.resizable()
//                .scaledToFit()
//
//            Button("Open Camera"){
//                self.showImagePicker = true
//            }.padding()
//
//
//        }.sheet(isPresented:self.$showImagePicker){
//            PhotoCaptureView(showImagePicker: self.$showImagePicker, image: self.$image)
//        }
//    }
//}
//
//struct ContentView_Previews: PreviewProvider {
//    static var previews: some; View {
//        ContentView()
//    }
//}

