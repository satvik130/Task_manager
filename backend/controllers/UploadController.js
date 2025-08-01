exports.uploadFile = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0)
      return res.status(400).json({ message: "No files uploaded" });

    const filePaths = req.files.map(file => file.path);

    res.status(200).json({
      message: "Files uploaded successfully",
      files: filePaths
    });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};
