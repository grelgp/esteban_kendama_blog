"use client";

export default function FileUploader() {
  const onFormSubmit = async () => {  
      let pwd = document.getElementById("password") as HTMLInputElement;
      let name = document.getElementById("name") as HTMLInputElement;
      let video = document.getElementById("video") as HTMLInputElement;
      
      if (!name || !video.files || !pwd) return;
      if (video.files.length == 0) return;
  
      const formData = new FormData();
      formData.append("name", name.value)
      formData.append("video", video.files[0])

      console.log(name.value)

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Auth": pwd.value
        },
        body: formData,
      });
  
      if (!res.ok) {
        const errorElmt = document.getElementById("error");
        if (errorElmt) errorElmt.style.visibility = "visible"
        return;
      }
      
      const form = document.getElementById("form") as HTMLFormElement;
      form.reset()
  }
  
  return (
    <div
      className="flex-col justify-center h-96 text-center w-full"
    >
      <label>Mot de passe administrateur : </label><br />
      <input className="mt-2 px-2 border-2 shadow-sm rounded-2xl h-8" type="password" name="password" id="password" />
      <p className="mt-8 mb-4 text-lg font-semibold">Nouvelle vidéo</p>
      <form id="form" className="space-y-4">
        <input
          className=""
          type="file"
          name="video"
          id="video"
          required
        />
        <div className="">
          <label>Nom : </label>
          <input className="px-2 border-2 shadow-sm rounded-2xl h-8" type="text" name="name" id="name" required />
        </div>
      </form>
      <button className="mt-4 border-2 rounded-2xl w-36 h-8 border-gray-600 hover:bg-gray-300" onClick={onFormSubmit}>Envoyer</button>
      <p id="error" hidden className="text-red-500 font-semibold mt-2">Erreur lors de l'envoi</p>
    </div>
  );
}