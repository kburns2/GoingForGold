//
//  ImagePicker.swift
//  AceAI
//
//  Created by Rachel Yao on 10/26/19.
//  Copyright © 2019 GoingForGold. All rights reserved.
//

//import Foundation
//import SwiftUI
//
//class ImagePickerCoordinator: NSObject, UINavigationControllerDelegate, UIImagePickerControllerDelegate
//    {
//
//    @Binding var isShown: Bool
//    @Binding var image: Image?
//
//    init(isShown:Binding<Bool>, image: Binding<Image?>) {
//        _isShown = isShown
//        _image = image
//    }
//    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
//
//        let uiImage = info[UIImagePickerController.InfoKey.originalImage] as! UIImage
//        image = Image(uiImage: uiImage)
//        isShown = false
//    }
//    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
//
//        isShown = false //cancel photo
//    }
//
//}
//
//    struct ImagePicker: UIViewControllerRepresentable {
//        @Binding var isShown: Bool
//        @Binding var image: Image?
//
//    func updateUIViewController(_ uiViewController: UIImagePickerController, context: UIViewControllerRepresentableContext<ImagePicker>) {
//
//    }
//    func makeCoordinator() -> ImagePickerCoordinator { //who is coordinating this, we gotta build
//
//        return ImagePickerCoordinator(isShown: $isShown, image: $image)
//    }
//    func makeUIViewController(context: UIViewControllerRepresentableContext<ImagePicker>) -> UIImagePickerController {
//        let picker = UIImagePickerController()
//        picker.delegate = context.coordinator
//        return picker
//
//    }
//
//}
